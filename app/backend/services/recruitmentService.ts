import { appendSheetValues } from "@/app/backend/shared/googleSheets";
import { toResumeAttachment } from "@/app/backend/shared/files";
import { getSmtpContext } from "@/app/backend/shared/smtp";
import { getIndiaTimestamp } from "@/app/backend/shared/time";
import { buildJobApplicationEmailHtml } from "@/app/backend/templates/jobApplicationEmailTemplate";

export async function processRecruitmentSubmission(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  type: string;
  message: string;
  resumeFile: File | null;
}) {
  const timestamp = getIndiaTimestamp();
  const resume = await toResumeAttachment(data.resumeFile);
  try {
    await appendSheetValues("Recruitment", [
      [
        data.firstName,
        data.lastName,
        data.email,
        data.phone,
        data.position,
        data.message || "",
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
    from: `"MicroAcademy Careers" <${smtp.smtpUser}>`,
    to: smtp.toEmail,
    replyTo: data.email,
    subject: `[${data.type.toUpperCase()}] Application: ${data.position} - ${data.firstName} ${data.lastName}`,
    html: buildJobApplicationEmailHtml({
      badgeLabel: data.type.toUpperCase(),
      title: "Job Application",
      position: data.position,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      message: data.message,
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
