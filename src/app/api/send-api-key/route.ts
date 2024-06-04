import { db } from "@/lib/db";
import { sendEmail } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;
    const newVerificationCode = Math.floor(100000 + Math.random() * 900000);

    // find user by email and update verification code and also return the user
    const existingUserByEmail = await db.users.update({
      where: { email: email },
      data: { verification_code: newVerificationCode },
    });

    if (!existingUserByEmail) {
      return NextResponse.json(
        { message: "email does not exists" },
        { status: 409 }
      );
    }

    const from_email = "Notify <no-reply@notify.careers>";
    await sendEmail(
      email,
      from_email,
      "Notify: Verify Your Email!",
      `Hey ${existingUserByEmail.first_name}! Thank you for signing up for Notify. Your email verification code is ${existingUserByEmail.verification_code}.`
    );

    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: `Something went wrong: ${error}` },
      { status: 500 }
    );
  }
}
