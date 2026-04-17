import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

// ─── Google Sheets API helpers ───

/**
 * Acquires a Google Auth client using service account credentials.
 * Requires: GOOGLE_SHEETS_CLIENT_EMAIL, GOOGLE_SHEETS_PRIVATE_KEY in .env
 */
async function getGoogleAuth() {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!clientEmail || !privateKey) {
    throw new Error('Google Sheets credentials (GOOGLE_SHEETS_CLIENT_EMAIL, GOOGLE_SHEETS_PRIVATE_KEY) are not configured');
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  return auth;
}

/**
 * Appends a row to a Google Spreadsheet.
 *
 * Requires these env vars:
 *   GOOGLE_SHEETS_SPREADSHEET_ID
 *   GOOGLE_SHEETS_RANGE (e.g. Sheet1!A:E)
 */
async function appendToGoogleSheet(row: Record<string, string>) {
  const auth = await getGoogleAuth();
  const sheets = google.sheets({ version: 'v4', auth });

  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const range = process.env.GOOGLE_SHEETS_RANGE || 'Sheet1!A:E';

  if (!spreadsheetId) {
    throw new Error('GOOGLE_SHEETS_SPREADSHEET_ID must be set in .env');
  }

  // Values are passed as an array of arrays
  const values = [
    [
      row['Full Name'],
      row['Email'],
      row['Phone'],
      row['Message'],
      row['Submitted At'],
    ]
  ];

  const res = await sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values,
    },
  });

  if (res.status !== 200) {
    throw new Error(`Failed to append row to Google Sheet: ${res.statusText}`);
  }
}

// ─── Email helper ───

async function sendEmail(data: {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  timestamp: string;
}) {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT) || 587;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const toEmail = process.env.CONTACT_TO_EMAIL || 'info@microacademy.net';

  if (!smtpHost || !smtpUser || !smtpPass) {
    console.warn('SMTP not configured — skipping email');
    return;
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: { user: smtpUser, pass: smtpPass },
  });

  await transporter.sendMail({
    from: `"MicroAcademy Website" <${smtpUser}>`,
    to: toEmail,
    replyTo: data.email,
    subject: `New Contact Form Submission from ${data.fullName}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
        <h2 style="color:#6A5F00;border-bottom:2px solid #FBE426;padding-bottom:8px;">
          New Contact Form Submission
        </h2>
        <table style="width:100%;border-collapse:collapse;margin-top:16px;">
          <tr>
            <td style="padding:8px 12px;font-weight:bold;color:#3a3a3a;width:140px;">Full Name</td>
            <td style="padding:8px 12px;color:#1B1C19;">${data.fullName}</td>
          </tr>
          <tr style="background:#F5F4EE;">
            <td style="padding:8px 12px;font-weight:bold;color:#3a3a3a;">Email</td>
            <td style="padding:8px 12px;color:#1B1C19;">${data.email}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:bold;color:#3a3a3a;">Phone</td>
            <td style="padding:8px 12px;color:#1B1C19;">${data.phone}</td>
          </tr>
          <tr style="background:#F5F4EE;">
            <td style="padding:8px 12px;font-weight:bold;color:#3a3a3a;">Message</td>
            <td style="padding:8px 12px;color:#1B1C19;">${data.message}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:bold;color:#3a3a3a;">Submitted At</td>
            <td style="padding:8px 12px;color:#1B1C19;">${data.timestamp}</td>
          </tr>
        </table>
      </div>
    `,
  });
}

// ─── POST handler ───

export async function POST(req: NextRequest) {
  try {
    const { fullName, email, phone, message } = await req.json();

    // Validate
    if (!fullName || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const timestamp = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
    });

    const errors: string[] = [];

    // 1. Save to Google Sheets
    try {
      await appendToGoogleSheet({
        'Full Name': fullName,
        Email: email,
        Phone: phone,
        Message: message,
        'Submitted At': timestamp,
      });
    } catch (sheetErr) {
      console.error('Google Sheets error:', sheetErr);
      errors.push('Google Sheets logging failed');
    }

    // 2. Send Email
    try {
      await sendEmail({ fullName, email, phone, message, timestamp });
    } catch (mailErr) {
      console.error('Email error:', mailErr);
      errors.push('Email send failed');
    }

    // If both failed, return error
    if (errors.length === 2) {
      return NextResponse.json(
        { error: 'Failed to process your message. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      ...(errors.length > 0 && { warnings: errors }),
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process your message. Please try again later.' },
      { status: 500 }
    );
  }
}
