import { appendSheetValues } from "@/app/backend/shared/microsoftExcel";
import { getSmtpContext } from "@/app/backend/shared/smtp";
import { getIndiaTimestamp } from "@/app/backend/shared/time";
import { buildContactEmailHtml } from "@/app/backend/templates/contactEmailTemplate";

async function appendContactToSheet(data: {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  timestamp: string;
}) {
  await appendSheetValues("Contact", [
    [data.fullName, data.email, data.phone, data.message, data.timestamp],
  ]);
}

async function sendContactEmail(data: {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  timestamp: string;
}) {
  const smtp = getSmtpContext();
  if (!smtp) {
    console.warn("SMTP not configured — skipping email");
    return;
  }

  await smtp.transporter.sendMail({
    from: `"MicroAcademy Contact" <${smtp.smtpUser}>`,
    to: smtp.toEmail,
    replyTo: data.email,
    subject: `New Message from ${data.fullName} (Contact Form)`,
    html: buildContactEmailHtml(data),
  });
}

export async function processContactSubmission(input: {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}) {
  const timestamp = getIndiaTimestamp();
  const errors: string[] = [];

  try {
    await appendContactToSheet({ ...input, timestamp });
  } catch (sheetErr) {
    console.error("Excel error:", sheetErr);
    errors.push("Excel logging failed");
  }

  try {
    await sendContactEmail({ ...input, timestamp });
  } catch (mailErr) {
    console.error("Email error:", mailErr);
    errors.push("Email send failed");
  }

  return { errors };
}
