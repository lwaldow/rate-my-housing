import { NextRequest, NextResponse } from "next/server";
import useMockApi from "../util/apiSwitch";
import { exampleListings } from "../util/mockData";

export async function POST(req: NextRequest) {
  const data = await req.json();

  if (useMockApi) {
    console.log("Mock listing posted with data:", data);
    return NextResponse.json({ data: exampleListings[0] });
  } else {
    const res = await fetch('http://localhost:8080/listings/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      const resultJson = await res.json();
      return NextResponse.json({ data: resultJson });
    } else {
      return NextResponse.json({}, { status: res.status, statusText: res.statusText });
    }
  }
}
