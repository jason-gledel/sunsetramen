import React from 'react';
import img_card1 from '../../assets/images/valeur1.jpg'
import s from './valeurcard1.module.scss';


const Valeurcard1 = () => {
    return (
        <div className="valeur_card">
            <div className="img_card_container img_card_container1">
                <img src={img_card1} className={s.img_card} alt="Valorise le fait maison chez Sunset Ramen"/>
                <div className="container_circle_card container_circle_card1">
                </div>
            </div>
            <div className="valeur_text_bloc">
                <p>Chaque bol de ramen est une œuvre d'art culinaire. Nous préparons tout à la maison, des nouilles aux bouillons, en passant par les garnitures savoureuses. Pas de raccourcis, pas de compromis! Nous croyons fermement que des ramen faits maison avec amour ont un goût incomparable.</p>
            </div>
        </div>
    );
  };
  
  export default Valeurcard1;