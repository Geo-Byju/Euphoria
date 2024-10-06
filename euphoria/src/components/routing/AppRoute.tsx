import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Men from '../screens/home/_components/Men.tsx';
import Women from '../screens/home/_components/Women.tsx';
import Home from '../screens/home/Home.tsx';

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
    </Routes>
  );
}

export default AppRoute;