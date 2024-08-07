import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Legal from './pages/Legal/Legal';
import Header from './components/header/Header'; 
import Footer from './components/footer/Footer'; 
import './styles/css/style.css';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="legal" element={<Legal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
