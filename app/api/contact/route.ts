import { NextRequest, NextResponse } from "next/server";
import { processContactSubmission } from "@/app/backend/services/contactService";

export async function POST(req: NextRequest) {
  try {
    const { fullName, email, phone, message } = await req.json();

    if (!fullName || !email || !phone || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    const { errors } = await processContactSubmission({
      fullName,
      email,
      phone,
      message,
    });

    if (errors.length === 2) {
      return NextResponse.json(
        { error: "Failed to process your message. Please try again later." },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      ...(errors.length > 0 && { warnings: errors }),
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process your message. Please try again later." },
      { status: 500 },
    );
  }
}
