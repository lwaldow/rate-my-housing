import { NextResponse } from "next/server";
import useMockApi from "../../apiSwitch";
import { exampleListings } from "../../mockData";

export async function GET({ params }: { params: { listingId: string } }) {
    if (useMockApi) {
        const listing = exampleListings.find(listing => listing.listing_id === params.listingId);
        if (listing) {
            return NextResponse.json({ data: listing });
        } else {
            return NextResponse.json({}, { status: 404, statusText: "Listing not found" });
        }
    } else {
        const res = await fetch(`https://localhost:8080/complexes/${params.listingId}`);
        if (res.ok) {
            const data = await res.json();
            return NextResponse.json({ data });
        } else {
            return NextResponse.json({}, { status: res.status, statusText: res.statusText });
        }
    }
}