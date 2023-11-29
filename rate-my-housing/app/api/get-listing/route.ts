import { NextRequest, NextResponse } from "next/server";
import useMockApi from "../util/apiSwitch";
import { exampleListings } from "../util/mockData";
import { Listing, ListingDTO, Review, transformListing } from "../util/types";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const listingId = searchParams.get('listingId')
    if (useMockApi) {
        const listing = exampleListings.find(listing => listing.listing_id === listingId);
        if (listing) {
            return NextResponse.json({ data: transformListing(listing) });
        } else {
            return NextResponse.json({}, { status: 404, statusText: "Listing not found" });
        }
    } else {
        const res = await fetch(`http://localhost:8080/listings/${listingId}`);
        if (res.ok) {
            const data = await res.json();
            return NextResponse.json({ data: transformListing(data) });
        } else {
            return NextResponse.json({}, { status: res.status, statusText: res.statusText });
        }
    }
}