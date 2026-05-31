import { NextRequest, NextResponse } from "next/server";
import { processContractHiringSubmission } from "@/app/backend/services/contractHiringService";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const position = formData.get("position") as string;
    const message = formData.get("message") as string;
    const resumeFile = formData.get("resume") as File | null;
    const jobId = (formData.get("jobId") as string) || "";

    if (!firstName || !lastName || !email || !phone || !position) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    await processContractHiringSubmission({
      firstName,
      lastName,
      email,
      phone,
      position,
      message,
      resumeFile,
      jobId,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contract API error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
