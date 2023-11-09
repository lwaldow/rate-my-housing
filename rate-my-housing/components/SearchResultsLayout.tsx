'use client';

import React from 'react';
import Filterbar from '@/components/Filterbar';
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, CardActions, Typography } from '@mui/material';

interface SearchResultsLayoutProps {
  complexes: Array<object>
}

export default function SearchResultsLayout({ complexes }: SearchResultsLayoutProps) {

  const [searchQuery, setSearchQuery] = React.useState("");

  const [availableOnly, setAvailableOnly] = React.useState<boolean>(false);

  const listingComponents = complexes.map((complex: any) => {
    return (
      <Card
        key={complex.complex_id}
      >
        <CardContent sx={{cursor: 'pointer', mb: 14}}>
          <Typography variant="h5">{complex.name}</Typography>
          <Typography sx={{fontsize:16}}>{complex.management}</Typography>
        </CardContent>
        <CardActions>
          <Button size="medium">Contact</Button>
        </CardActions>
      </Card>
    );
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