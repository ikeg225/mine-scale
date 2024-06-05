import { db } from "@/lib/db";
import { sendEmail } from "@/lib/utils";
import { NextResponse } from "next/server";
import { sha256 } from "js-sha256";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    if (email === undefined || email === "info@minescale.net") {
      return NextResponse.json(
        { message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const existingUserByEmail = await db.users.findFirst({
      where: {
        email,
      },
    });

    const apiKey = uuidv4();
    const hashedApiKey = sha256(apiKey);

    if (!existingUserByEmail) {
      const userId = uuidv4();
      await db.users.create({
        data: {
          id: userId,
          email,
          apiKey: hashedApiKey,
        },
      });
    } else {
      await db.users.update({
        where: {
          email,
        },
        data: {
          apiKey: hashedApiKey,
        },
      });
    }

    const from_email = "Minescale <no-reply@minescale.net>";
    await sendEmail(
      email,
      from_email,
      "Minescale: Here's your API key!",
      `Hey! Thank you for signing up for Minescale. Your API key is ${apiKey}. For more information on how to use it, visit https://minescale.net/documentation. If you have any questions, feel free to reach out to us at info@minescale.net. Happy scraping!`
    );

    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: `Something went wrong: ${error}` },
      { status: 500 }
    );
  }
}
