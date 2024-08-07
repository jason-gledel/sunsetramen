import React from 'react';
import { Link } from 'react-router-dom';
import s from './home.module.scss';
import Ramenhome from '../../components/ramenhome/Ramenhome';
import Valeurs from '../../components/valeurs/Valeurs';
import image_hero from '../../assets/images/image-hero.jpg';

const Home = () => {
    return (
    <>
            <div className={s.container_main}>
                    <div className={s.hero}>
                        <div className={s.hero_right}>
                            <div className={s.content_h1}>
                                <h1>plongez dans un horizon de <span>saveurs</span></h1>
                                <Link to="/#" className="primary_btn_stroke primary_stroke_orange">voir le menu <i className="icon-ramen"></i></Link>
                            </div>
                            <img src={image_hero} className={s.image_hero} alt="ramen-hero"/>
                            <div className={s.text_right_content}>
                                <p>Sunset Ramen vous propose une véritable expérience culinaire qui vous transporte directement dans les rues animées de Tokyo. Passionnés par la culture japonaise et l'art des ramen, nous nous efforçons de vous offrir les saveurs authentiques et le savoir-faire traditionnel du Japon.</p>
                            </div>
                        </div>
                    </div> 
            </div>
            <Ramenhome></Ramenhome>
            <Valeurs></Valeurs>
     </>
    );
  };
  
  export default Home;