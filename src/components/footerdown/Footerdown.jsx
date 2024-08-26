import React from 'react';
import { Link } from 'react-router-dom';
import s from './footerdown.module.scss';


const Footerdown = () => {
    return (
        <section className={s.container__footerdown}>
          <div className={s.line_logo_nav}>
            <Link to="/" className={s.logo_footer}></Link>
            <nav className={s.nav_footer}>
                <Link to="/menu" className="secondary_btn btn_light_blue">le menu</Link>
            </nav>
          </div>
          <div className={s.line_socials_mentions}>
            <div className={s.socials}>
                <Link to="#" ><i className="icon-youtube"></i></Link>
                <Link to="#" ><i className="icon-insta"></i></Link>
                <Link to="#" ><i className="icon-twitter"></i></Link>
                <Link to="#" ><i className="icon-facebook"></i></Link>
            </div>
            <div className={s.mentions}>
                <Link to="/legal" className="secondary_btn btn_grey_blue">mentions légales</Link>
                <p>© 2024 - Sunset Ramen - All rights reserved</p>
            </div>
          </div>
        </section>
    );
  };
  
  export default Footerdown;