import React from 'react';
import { Link } from 'react-router-dom';
import image_ramenhome from '../../assets/images/ramen-avant.jpg'
import s from './ramenhome.module.scss';


const Ramenhome = () => {
    return (
        <section className="container__main">
            <div className="container_dark">
                <div className={s.ramenhome}>
                    <div className={s.subtitle_ramenhome}>
                        <div className="subtitle_ramen">le ramen du moment</div>
                        <h2 className="h2_underline">flaming hot tornado ramen</h2>
                    </div>
                    <div className={s.ramen_content_flex}>
                        <div className="container_img_home">
                            <div className="piquance_home">
                                <p>ça pique fort</p>
                                <div className="degre_piquance">
                                    <i className="icon-fire-full fire-full-home"></i>
                                    <i className="icon-fire-full fire-full-home"></i>
                                    <i className="icon-fire-stroke fire-stroke-home"></i>
                                </div>
                            </div>
                            <img src={image_ramenhome} alt="Le ramen du moment" />
                        </div>
                        <div className={s.content_ramen_text}>
                            <p className="text_beige">Bouillon de poulet, sauce soja, huile de piment, ail, gingembre, nouilles ramen, tranches de bœuf mariné épicé, tranches de jalapeño, kimchi, bok choy sauté, œuf mollet, filet de sriracha, flocons de piment rouge broyés, oignons frits croustillants, coriandre fraîche.</p>
                            <p className="prix_main">13,50€</p>
                            <div className="buttons_couple">
                                <Link to="#" className="main_btn_orange_cart">ajouter au panier <span className="icon-basket basket-ramenhome"></span></Link>
                                <Link to="/menu" className="secondary_btn btn_beige">voir le menu</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  };
  
  export default Ramenhome;