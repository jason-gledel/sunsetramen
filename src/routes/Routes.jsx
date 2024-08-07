import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Menu from '../pages/Menu/Menu';
import Legal from '../pages/Legal/Legal';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="legal" element={<Legal />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
