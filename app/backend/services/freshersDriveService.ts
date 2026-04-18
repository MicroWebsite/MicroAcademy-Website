import { appendSheetValues } from "@/app/backend/shared/googleSheets";
import { toResumeAttachment } from "@/app/backend/shared/files";
import { getSmtpContext } from "@/app/backend/shared/smtp";
import { getIndiaTimestamp } from "@/app/backend/shared/time";
import { buildFreshersDriveEmailHtml } from "@/app/backend/templates/freshersDriveEmailTemplate";

export async function processFreshersDriveSubmission(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  domain: string;
  resumeFile: File | null;
}) {
  const timestamp = getIndiaTimestamp();
  const resume = await toResumeAttachment(data.resumeFile);

  try {
    await appendSheetValues("FreshersDrive", [
      [
        data.firstName,
        data.lastName,
        data.email,
        data.phone,
        data.domain,
        timestamp,
      ],
    ]);
  } catch (err) {
    console.error("Sheets error:", err);
  }

  const smtp = getSmtpContext();
  if (!smtp) {
    console.warn("SMTP not configured — skipping email");
    return;
  }

  await smtp.transporter.sendMail({
    from: `"MicroAcademy Drive" <${smtp.smtpUser}>`,
    to: smtp.toEmail,
    replyTo: data.email,
    subject: `New Freshers Drive Registration: ${data.domain} - ${data.firstName} ${data.lastName}`,
    html: buildFreshersDriveEmailHtml({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      domain: data.domain,
      timestamp,
      hasResume: Boolean(resume),
    }),
    attachments: resume
      ? [
          {
            filename: resume.filename,
            content: resume.content,
            contentType: resume.contentType,
          },
        ]
      : [],
  });
}
