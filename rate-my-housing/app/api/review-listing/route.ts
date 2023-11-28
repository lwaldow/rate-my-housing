import { NextRequest, NextResponse } from "next/server";
import useMockApi from "../util/apiSwitch";

export async function POST(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const listingId = searchParams.get('listingId')
  if (useMockApi) {
    // Perform mock operation for posting a review for a listing
    return NextResponse.json({ message: `Mock review posted for listing ${listingId}` });
  } else {
    // Perform real API call for posting a review for a listing
    // Implement as needed
  }
}