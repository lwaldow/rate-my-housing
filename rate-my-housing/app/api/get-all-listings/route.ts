import { NextResponse } from "next/server";
import useMockApi from "../apiSwitch";
import { exampleListings } from "../mockData";

export async function GET() {
  if (useMockApi) {
    return NextResponse.json({ data: exampleListings });
  } else {
    const res = await fetch('https://localhost:8080/complexes');
    const data = await res.json();
    return NextResponse.json({ data });
  }
}