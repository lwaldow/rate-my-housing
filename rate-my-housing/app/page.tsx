import React from 'react';
import Filterbar from '@/components/Filterbar';
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import SearchResultsLayout from '@/components/SearchResultsLayout';

const places = [
  {
    complex_id: "id",
    name: "Test place",
    management: "managers",
  },

]

async function getComplexes() {
  /* const res = await fetch('http://localhost:8080/complexes')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json() */
  return places
}

export default async function Home() {

  let complexes = await getComplexes();
  
  return (
    <>
      <SearchResultsLayout complexes={complexes} />
    </>
  );
}