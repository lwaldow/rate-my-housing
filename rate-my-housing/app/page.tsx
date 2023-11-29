import React from 'react';
import SearchResultsLayout from '@/components/SearchResultsLayout';
import { ListingDTO } from './api/util/types';

async function getListings(): Promise<ListingDTO[]> {
  const res = await fetch('http://localhost:3000/api/get-all-listings', { cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const json = await res.json()
  return json.data as ListingDTO[];
}

export default async function Home() {

  const listingDTOs: ListingDTO[] = await getListings();

  return (
    <>
      <SearchResultsLayout listings={listingDTOs} />
    </>
  );
}