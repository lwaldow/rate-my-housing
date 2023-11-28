'use client';

import React from 'react';
import _, { debounce } from "lodash";
import Filterbar from '@/components/Filterbar';
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import SearchListingCard from './SearchListingCard';
import { ListingDTO } from '@/app/api/util/types';

export default function SearchResultsLayout({ listings }: { listings: ListingDTO[] }) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const [sortOptions, setSortOptions] = React.useState<('highestReview' | 'mostReviews')[]>([]);

  const debouncedSearch = React.useCallback(
    debounce((query: string) => {
      setLoading(false); // Set loading to false after debounce
    }, 300),
    []
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setLoading(true); // Set loading to true when user types
    setSearchQuery(query);
    debouncedSearch(query);
  };


  const filteredListings = listings.filter((listing: ListingDTO) => {
    // Filtering based on searchQuery
    return (
      listing.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      listing.management.toLowerCase().includes(searchQuery.toLowerCase()) ||
      listing.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
      listing.town.toLowerCase().includes(searchQuery.toLowerCase()) ||
      listing.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      listing.zip.toString().includes(searchQuery.toLowerCase())
    );
  });

  
const sortedListings = React.useMemo(() => {
  let sortedListings = [...filteredListings]; // Create a copy to avoid mutating the original data

  if (sortOptions.includes('highestReview')) {
    sortedListings.sort((a, b) => {
      return b.overallRating - a.overallRating;
    });
  }

  if (sortOptions.includes('mostReviews')) {
    sortedListings.sort((a, b) => {
      return b.reviews.length - a.reviews.length;
    });
  }

  return sortedListings;
}, [filteredListings, sortOptions]);

  const listingComponents = sortedListings.map((listing: ListingDTO) => {
    return <SearchListingCard key={listing.listing_id} listing={listing} />;
  });

  return (
    <>
      <Filterbar
        searchQuery={searchQuery}
        setSearchQuery={handleSearchChange}
        sortOptions={sortOptions}
        setSortOptions={setSortOptions}
      />
      <div className='flex flex-grow max-h-full overflow-hidden p-1'>
        <Card className='basis-1/2 relative bg-gray-300'>
          <Image src="/favicon.ico" width={300} height={300} alt="Map" />
        </Card>
        <Stack className='basis-1/2 p-2 overflow-auto max-h-full' spacing={2}>
          {loading ? (
            <div className='m-1 text-center'>Loading...</div>
          ) : (
            <>
              {listingComponents.length > 0 ? (
                listingComponents
              ) : (
                <div>No results found.</div>
              )}
            </>
          )}
        </Stack>
      </div>
    </>
  );
}
