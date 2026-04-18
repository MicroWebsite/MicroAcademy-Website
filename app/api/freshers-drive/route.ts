import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";

const EMAIL_COLORS = {
  primary: "#6A5F00",
  secondary: "#FBE426",
  bgCream: "#F5F4EE",
  textDark: "#1B1C19",
  textMuted: "#666",
};

// ─── Google Sheets API helpers ───

async function getGoogleAuth() {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(
    /\\n/g,
    "\n",
  );

  if (!clientEmail || !privateKey) {
    throw new Error("Google Sheets credentials are not configured");
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return auth;
}

async function appendToGoogleSheet(row: Record<string, string>) {
  const auth = await getGoogleAuth();
  const sheets = google.sheets({ version: "v4", auth });

  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const range = process.env.GOOGLE_SHEETS_DRIVE_RANGE || "Sheet2!A:G"; // Assuming Sheet2 or different range for drives

  if (!spreadsheetId) {
    throw new Error("GOOGLE_SHEETS_SPREADSHEET_ID must be set");
  }

  const values = [
    [
      row["First Name"],
      row["Last Name"],
      row["Email"],
      row["Phone"],
      row["Domain"],
      row["Resume Attached"], // Status flag
      row["Submitted At"],
    ],
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: "USER_ENTERED",
    requestBody: { values },
  });
}

// ─── Email handler ───

async function sendEmail(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  domain: string;
  timestamp: string;
  resume?: { content: Buffer; filename: string; contentType: string };
}) {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT) || 587;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const toEmail = process.env.CONTACT_TO_EMAIL || "info@microacademy.net";

  if (!smtpHost || !smtpUser || !smtpPass) {
    console.warn("SMTP not configured — skipping email");
    return;
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: { user: smtpUser, pass: smtpPass },
  });

  const attachments = data.resume
    ? [
        {
          filename: data.resume.filename,
          content: data.resume.content,
          contentType: data.resume.contentType,
        },
      ]
    : [];

  await transporter.sendMail({
    from: `"MicroAcademy Drive" <${smtpUser}>`,
    to: toEmail,
    replyTo: data.email,
    subject: `New Freshers Drive Registration: ${data.domain} - ${data.firstName} ${data.lastName}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
        <h2 style="color:${EMAIL_COLORS.primary};border-bottom:2px solid ${EMAIL_COLORS.secondary};padding-bottom:8px;">
          Drive Registration Details
        </h2>
        <p><strong>Freshers Drive:</strong> ${data.domain}</p>
        <table style="width:100%;border-collapse:collapse;margin-top:16px;">
          <tr>
            <td style="padding:8px;font-weight:bold;background:${EMAIL_COLORS.bgCream};width:140px;">First Name</td>
            <td style="padding:8px;">${data.firstName}</td>
          </tr>
          <tr>
            <td style="padding:8px;font-weight:bold;">Last Name</td>
            <td style="padding:8px;">${data.lastName}</td>
          </tr>
          <tr style="background:${EMAIL_COLORS.bgCream};">
            <td style="padding:8px;font-weight:bold;">Email</td>
            <td style="padding:8px;">${data.email}</td>
          </tr>
          <tr>
            <td style="padding:8px;font-weight:bold;">Phone</td>
            <td style="padding:8px;">${data.phone}</td>
          </tr>
          <tr style="background:${EMAIL_COLORS.bgCream};">
            <td style="padding:8px;font-weight:bold;">Submitted At</td>
            <td style="padding:8px;">${data.timestamp}</td>
          </tr>
        </table>
        <p style="margin-top:20px;font-size:12px;color:${EMAIL_COLORS.textMuted};">
          Resume is attached to this email.
        </p>
      </div>
    `,
    attachments,
  });
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const domain = formData.get("domain") as string;
    const resumeFile = formData.get("resume") as File | null;

    if (!firstName || !lastName || !email || !phone || !domain) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });

    let resumeData;
    if (resumeFile) {
      const arrayBuffer = await resumeFile.arrayBuffer();
      resumeData = {
        content: Buffer.from(arrayBuffer),
        filename: resumeFile.name,
        contentType: resumeFile.type,
      };
    }

    // 1. Google Sheets
    try {
      await appendToGoogleSheet({
        "First Name": firstName,
        "Last Name": lastName,
        Email: email,
        Phone: phone,
        Domain: domain,
        "Resume Attached": resumeFile ? "Yes" : "No",
        "Submitted At": timestamp,
      });
    } catch (err) {
      console.error("Sheets error:", err);
    }

    // 2. Email
    await sendEmail({
      firstName,
      lastName,
      email,
      phone,
      domain,
      timestamp,
      resume: resumeData,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Fetch error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
