import React from 'react';
import Head from 'next/head';
import { Playfair_Display } from 'next/font/google'
import { Metadata } from 'next';
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['900'] })

export const metadata: Metadata = {
  title: 'About RateMyHousing',
  description: 'CS320 Group 4',
}

export default function About() {
  return (
    <div className="bg-gray-100 py-4">

      <div className="container mx-auto p-4">
      <img
          src="/ratemyhousingpicture.jpeg"
          alt="UMass Img"
          className="mx-auto mb-4"
        />
        <h1 className="text-2xl font-semibold mb-4">About RateMyHousing</h1>
        <p className="text-base mb-6">
          Finding good housing close to campus is getting harder and harder for students each year, especially with the ongoing housing crisis at UMass. RateMyHousing aims to step in and provide a platform for students to find their ideal housing, on or off campus.
        </p>
        <h2 className="text-xl font-semibold mb-4">Contact Us At:</h2>
        <p className="text-base font-bold mb-2">Contact Information:</p>
        <p className="text-base">Email: contact@ratemyhousing.com</p>
      </div>
    </div>
  );
}



