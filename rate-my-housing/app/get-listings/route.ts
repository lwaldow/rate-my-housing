import { NextResponse } from "next/server"

export async function GET() {
    const res = await fetch('https://localhost:8080/complexes')
    const data = await res.json()
   
    return NextResponse.json({ data })
  }