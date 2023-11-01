'use client';

import React from 'react';
import Head from 'next/head';
import Filterbar from '@/components/Filterbar';
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';

export default function Home() {

  const [searchQuery, setSearchQuery] = React.useState("");

  const [availableOnly, setAvailableOnly] = React.useState<boolean>(false);

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
          <Image src="/favicon.ico" width={300} height={300} alt="Map"/>
        </Card>
        <Stack className='basis-1/2 p-2 overflow-auto max-h-full' spacing={2}>
          <Card sx={{minHeight: 220}}>
            Abcdef
          </Card>
          <Card sx={{minHeight: 220}}>
            Abcdef
          </Card>
          <Card sx={{minHeight: 220}}>
            Abcdef
          </Card>
        </Stack>
      </div>
    </>
  );
}