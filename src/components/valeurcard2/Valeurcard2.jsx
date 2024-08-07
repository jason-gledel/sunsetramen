import React from 'react';
import { Link } from 'react-router-dom';
import img_card2 from '../../assets/images/valeur2.jpg'
import s from './valeurcard2.module.scss';


const Valeurcard2 = () => {
    return (
        <div className="valeur_card valeur_card2">
            <div className="img_card_container img_card_container2">
                <img src={img_card2} className={s.img_card} alt="Image valorisant le fait maison chez Sunset Ramen"/>
                <div className="container_circle_card container_circle_card2">
                </div>
            </div>
            <div className="valeur_text_bloc">
                <p>Chaque bol de ramen est une œuvre d'art culinaire. Nous préparons tout à la maison, des nouilles aux bouillons, en passant par les garnitures savoureuses. Pas de raccourcis, pas de compromis! Nous croyons fermement que des ramen faits maison avec amour ont un goût incomparable.</p>
            </div>
        </div>
    );
  };
  
  export default Valeurcard2;