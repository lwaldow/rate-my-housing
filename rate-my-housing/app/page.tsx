import React from 'react';
import Filterbar from '@/components/Filterbar';
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import SearchResultsLayout from '@/components/SearchResultsLayout';

async function getUsers() {
  const res = await fetch('http://localhost:8080/users')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

async function getComplexes() {
  const res = await fetch('http://localhost:8080/complexes')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

// !!!
const ENABLE_API = false;
// !!!

export default async function Home() {

  let complexes = ENABLE_API ? await getComplexes() : [];
  
  return (
    <>
      <SearchResultsLayout complexes={complexes} />
    </>
  );
}