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
                    <Link to="/#contact" className="secondary_btn btn_orange">contact</Link>
                </nav>
                <nav className={s.header__nav__logo}>
                    <Link to="/">
                        <div className={s.header__logo}></div>
                    </Link>
                </nav>
            </nav>
        </div>
    </header>
  );
};

export default Header;
















