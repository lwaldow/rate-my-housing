import { NextResponse } from "next/server";
import useMockApi from "../util/apiSwitch";
import { exampleListings } from "../util/mockData";
import { Listing, ListingDTO, transformListing } from "../util/types";

export async function GET(): Promise<NextResponse<{ data: Listing[] }>> {
  if (useMockApi) {
    const listingDTOs = exampleListings.map((listing: Listing) => transformListing(listing));
    console.log("help");
    return NextResponse.json({ data: listingDTOs });
  } else {
    const res = await fetch('https://localhost:8080/listings');
    const data = await res.json()
    return NextResponse.json({ data });
  }
}