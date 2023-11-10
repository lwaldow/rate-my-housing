'use client';

import React from 'react';
import Filterbar from '@/components/Filterbar';
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, CardActions, Typography } from '@mui/material';
import Link from 'next/link';
import SearchListingCard from './SearchListingCard';

interface SearchResultsLayoutProps {
  complexes: Array<Complex>
}

export default function SearchResultsLayout({ complexes }: SearchResultsLayoutProps) {

  const [searchQuery, setSearchQuery] = React.useState("");

  const [availableOnly, setAvailableOnly] = React.useState<boolean>(false);

  const listingComponents = complexes.map((complex: Complex) => {
    return <SearchListingCard complex={complex} />
  })

  return (
    <>
      <Filterbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        availableOnly={availableOnly}
        setAvailableOnly={setAvailableOnly}
      />
      <div className='flex flex-grow max-h-full overflow-hidden p-1'>
        <Card className='basis-1/2 relative bg-gray-300'>
          <Image src="/favicon.ico" width={300} height={300} alt="Map" />
        </Card>
        <Stack className='basis-1/2 p-2 overflow-auto max-h-full' spacing={2}>
          {listingComponents}
        </Stack>
      </div>
    </>
  );
}