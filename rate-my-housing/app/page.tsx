import React from 'react';
import Filterbar from '@/components/Filterbar';
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import SearchResultsLayout from '@/components/SearchResultsLayout';
import { ListingDTO, transformListing } from './api/util/types';

const places = [
  {
    complex_id: "12345",
    name: "Test place",
    address: "123 Amherst Rd Amherst,MA 01003",
    management: "managers",
  },

]

async function getComplexes(): Promise<ListingDTO[]> {
  const res = await fetch('http://localhost:3000/api/get-all-listings')
  console.log("mariana jaramillo")
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const json = await res.json()
  return json.data as ListingDTO[];
}

export default async function Home() {

  const listingDTOs: ListingDTO[] = await getComplexes();
  
  return (
    <>
      <SearchResultsLayout listings={listingDTOs} />
    </>
  );
}