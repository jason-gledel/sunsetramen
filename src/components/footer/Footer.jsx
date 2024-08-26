// src/components/Header/Header.jsx
import React from 'react';
import Contact from '../../components/contact/Contact'
import Footerdown from '../../components/footerdown/Footerdown'
import s from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
        <Contact />
        <Footerdown />
    </footer>
  );
};

export default Footer;
