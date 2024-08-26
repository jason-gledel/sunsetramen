import React from "react";
import RamenCard from "./RamenCard";
import s from './ramenList.module.scss'; // Importation du fichier CSS module

const RamenList = ({ ramens, filters, onAddToCart }) => {
  const filteredRamens = ramens.filter((ramen) => {
    const matchSpiciness =
      filters.spiciness.length === 0 || filters.spiciness.includes(ramen.spiciness);

    // Vérification du type de ramen
    const matchType =
      filters.types.length === 0 || filters.types.includes(ramen.type);

    // Vérification des filtres végétarien et vegan
    const matchVegetarian = !filters.vegetarian || ramen.vegetarian;
    const matchVegan = !filters.vegan || ramen.vegan;

    // Appliquer les filtres végétarien et vegan correctement
    const matchVegetarianOrVegan = 
      (!filters.vegetarian && !filters.vegan) || 
      (filters.vegetarian && ramen.vegetarian) || 
      (filters.vegan && ramen.vegan);

    // Application de tous les filtres
    return matchSpiciness && matchType && matchVegetarianOrVegan;
  });

  return (
    <div className={s.ramenList}>
      {filteredRamens.length > 0 ? (
        filteredRamens.map((ramen) => (
          <RamenCard key={ramen.id} ramen={ramen} onAddToCart={onAddToCart} />
        ))
      ) : (
        <p>Aucun ramen ne correspond à vos critères de filtrage.</p>
      )}
    </div>
  );
};

export default RamenList;
