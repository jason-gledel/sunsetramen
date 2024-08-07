import React from 'react';
import { Link } from 'react-router-dom';
import s from './contact.module.scss';


const Contact = () => {
    return (
        <section className={s.container__contact}>
            <h2>Sunset Ramen, encore et toujours le restaurant le <span>mieux&nbsp;placé</span> de Venice Beach</h2>
            <div className={s.contact_content_box}>
                <div className={s.contact_adresse}>
                    <div className={s.line_adresse}> 
                        <i className="icon-map-pin"></i>
                        <p>1406 Ocean Front Walk, Venice, CA 90291, États-Unis</p>
                    </div>
                    <div className={s.link_map}> 
                        <i className="icon-google icon-google-contact"></i>
                        <Link className="secondary_btn btn_beige ">nous trouver sur google maps</Link>
                        <i className="icon-arrow-right"></i>
                    </div>
                </div>
                <div className={s.contact_tel}>
                    <i className="icon-phone"></i>
                    <p>&#40;213&#41; 555-9876</p>
                </div>
            </div>
        </section>
    );
  };
  
  export default Contact;