import React from "react";
import s from './ramenCard.module.scss'; 

// Import dynamique des images
const images = require.context('../../assets/images/ramens', true);

const RamenCard = ({ ramen }) => {
  const ramenImage = images(`./${ramen.image}`);

  // Fonction pour obtenir le label de piquance en fonction du niveau
  const getSpicinessLabel = (spiciness) => {
    switch (spiciness) {
      case 1:
        return "Légèrement épicé";
      case 2:
        return "Pique fort";
      case 3:
        return "Littéralement de la lave";
      default:
        return "";
    }
  };

  return (
    <div className={s.ramenCard}>
      <img src={ramenImage} alt={`${ramen.title}`} />
      <div className={s.ramenCardContent}>
        <div className={s.title_content}>
          <p className={s.ramenTitle}>{ramen.title}</p>

          {/* Affichage du label de piquance */}
          {ramen.spiciness > 0 && (
            <p className={s.spicinessLabel}>
              {getSpicinessLabel(ramen.spiciness)}
            </p>
          )}

          {ramen.vegetarian && <p className="vege">Végétarien</p>}
          {ramen.vegan && <p className="vegan">Vegan</p>}
          <p className={s.description}>{ramen.description}</p>


        </div>
        <div className={s.price_basket}>
          <p className={s.prix}>{ramen.price} €</p> 
        </div>
      </div>
    </div>
  );
};

export default RamenCard;
