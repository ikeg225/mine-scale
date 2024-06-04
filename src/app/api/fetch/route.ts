import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const payload = {
      apiKey: "Some Key",
      requests: [{ url: data.url }],
    };

    const response = await fetch("https://api.minescale.net", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const json = await response.json();

    return NextResponse.json({ data: json, message: "Success" });
  } catch (error) {
    return NextResponse.json(
      { user: null, message: `Something went wrong: ${error}` },
      { status: 500 }
    );
  }
}
