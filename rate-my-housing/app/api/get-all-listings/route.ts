import { NextResponse } from "next/server";
import useMockApi from "../util/apiSwitch";
import { exampleListings } from "../util/mockData";
import { Listing, ListingDTO, Review, transformListing } from "../util/types";

export async function GET(): Promise<NextResponse<{ data: ListingDTO[] }>> {
  if (useMockApi) {
    const listingDTOs = exampleListings.map((listing: Listing) => transformListing(listing));
    console.log("help");
    return NextResponse.json({ data: listingDTOs });
  } else {
    const res = await fetch('http://localhost:8080/listings');
    const listings: Listing[] = await res.json()
    const listingDTOs: ListingDTO[] = listings.map((listing: Listing) => transformListing(listing))
    return NextResponse.json({ data: listingDTOs });
  }
}