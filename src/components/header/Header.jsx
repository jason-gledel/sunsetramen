// src/components/Header/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import s from './header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
        <div className={s.header__container}>
            <nav className={s.header__nav}>
                <nav className={s.header__nav__left}>
                    <Link to="/menu" className="secondary_btn btn_orange">le menu</Link>
                    <Link to="#" className="secondary_btn btn_orange">contact</Link>
                </nav>
                <Link to="/">
                    <div className={s.header__logo}></div>
                </Link>
                <nav className={s.header__nav__right}>
                    <Link to="#" className={s.header__nav_panier}>
                        <div>mon panier</div>
                        <i className="icon-basket basket_header"></i>  
                    </Link>
                    <Link to="#" className={s.header__nav_lang}>
                        <div className={s._flag}></div>
                        <i className="arrow-down"></i>
                    </Link>
                </nav>
            </nav>
        </div>
    </header>
  );
};

export default Header;
