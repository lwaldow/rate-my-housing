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
export default async function Home() {

  //ONLY IF BACKEND SERVER RUNNING
  let [users, complexes] = [{}, {}]//await Promise.all([getUsers(), getComplexes()])
  return (
    <>
    <p>{JSON.stringify(users)}</p>
    <p>{JSON.stringify(complexes)}</p>
      <SearchResultsLayout complexes={complexes}/>
    </>
  );
}