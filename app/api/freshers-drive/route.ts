import { NextRequest, NextResponse } from "next/server";
import { processFreshersDriveSubmission } from "@/app/backend/services/freshersDriveService";

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

    await processFreshersDriveSubmission({
      firstName,
      lastName,
      email,
      phone,
      domain,
      resumeFile,
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
