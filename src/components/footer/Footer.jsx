// src/components/Header/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../../components/contact/Contact'
import Footerbottom from '../../components/footerdown/Footerdown'
import s from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
        <Contact />
        <Footerbottom />
    </footer>
  );
};

export default Footer;
