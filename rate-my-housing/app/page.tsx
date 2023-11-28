import React from 'react';
import SearchResultsLayout from '@/components/SearchResultsLayout';
import { ListingDTO } from './api/util/types';

const places = [
  {
    complex_id: "12345",
    name: "Test place",
    address: "123 Amherst Rd Amherst,MA 01003",
    management: "managers",
  },

]

async function getComplexes(): Promise<ListingDTO[]> {
  const res = await fetch('http://localhost:3000/api/get-all-listings', { cache: 'no-store' })
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