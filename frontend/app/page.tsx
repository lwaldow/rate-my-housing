import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div className={`maroon-bg`}>
      <Head>
        <title>RateMyHousing</title>
      </Head>
      <nav className="bg-maroon-700 py-4 px-40">
        <span className="text-self-center whitespace-nowrap text-3xl font-extrabold text-white">
          RateMyHousing
        </span>
      </nav>
    </div>
  );
}