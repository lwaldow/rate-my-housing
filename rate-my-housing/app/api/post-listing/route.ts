import { NextRequest, NextResponse } from "next/server";
import useMockApi from "../apiSwitch";

export async function POST(req: NextRequest) {
  const { body } = req;

  if (useMockApi) {
    console.log("Mock listing posted with data:", body);
    return NextResponse.json({ message: "Mock listing posted successfully" });
  } else {
    // Assuming you have a route like '/api/post-listing' on your server
    const res = await fetch('https://localhost:8080/api/post-listing', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      const data = await res.json();
      return NextResponse.json({ data });
    } else {
      return NextResponse.json({}, { status: res.status, statusText: res.statusText });
    }
  }
}
