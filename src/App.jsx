import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import ScrollToTop from './components/scrolltotop/ScrollToTop';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Legal from './pages/Legal/Legal';
import Header from './components/header/Header'; 
import Footer from './components/footer/Footer'; 
import './styles/css/style.css'; // Styles globaux

// Layout global pour inclure le Header et le Footer
const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* Affiche le composant de la route courante */}
      </main>
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* Composant pour remonter automatiquement en haut de la page lors d'un changement de route */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Route pour la page d'accueil */}
          <Route path="menu" element={<Menu />} /> {/* Route pour la page du menu */}
          <Route path="legal" element={<Legal />} /> {/* Route pour la page des mentions légales */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
