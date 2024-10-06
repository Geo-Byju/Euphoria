import React from 'react'
import Header from '../../includes/Header.tsx';
import Spotlight from './_components/Spotlight.tsx';
import Explore from './_components/Explore.tsx';
import NewArrival from './_components/NewArrival.tsx';

export default function Home() {
  return (
    <>
        <Header />
        <Spotlight />
        <Explore />
        <NewArrival />
    </>
  );
}
