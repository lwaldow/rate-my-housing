import { NextRequest, NextResponse } from "next/server";
import useMockApi from "../util/apiSwitch";

export async function POST(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const listingId = searchParams.get('listingId')
  const json = await request.json()
  if (useMockApi) {
    // Perform mock operation for posting a review for a listing
    return NextResponse.json({ data: JSON.stringify(request.json) });
  } else {
    const res = await fetch(`http://localhost:8080/reviews/${listingId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(json.review),
    });

    if (res.ok) {
      const data = await res.json();
      return NextResponse.json({ data });
    } else {
      return NextResponse.json({}, { status: 501, statusText: 'HELLO' });
    }
  }
}