import { NextRequest, NextResponse } from "next/server";
import { processDirectLateralHiringSubmission } from "@/app/backend/services/directLateralHiringService";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const position = formData.get("position") as string;
    const type = formData.get("type") as string;
    const message = formData.get("message") as string;
    const resumeFile = formData.get("resume") as File | null;

    if (!firstName || !lastName || !email || !phone || !position || !type) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    await processDirectLateralHiringSubmission({
      firstName,
      lastName,
      email,
      phone,
      position,
      type,
      message,
      resumeFile,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Direct/Lateral Hiring API error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
