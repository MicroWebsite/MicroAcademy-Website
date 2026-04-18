export async function toResumeAttachment(resumeFile: File | null) {
  if (!resumeFile || resumeFile.size <= 0) {
    return undefined;
  }

  const arrayBuffer = await resumeFile.arrayBuffer();
  return {
    content: Buffer.from(arrayBuffer),
    filename: resumeFile.name,
    contentType: resumeFile.type,
  };
}
