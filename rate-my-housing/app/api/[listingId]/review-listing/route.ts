import { NextResponse } from "next/server";
import useMockApi from "../../util/apiSwitch";

export async function POST({ params }: { params: { listingId: string } }) {
  const { listingId } = params;

  if (useMockApi) {
    // Perform mock operation for posting a review for a listing
    return NextResponse.json({ message: `Mock review posted for listing ${listingId}` });
  } else {
    // Perform real API call for posting a review for a listing
    // Implement as needed
  }
}