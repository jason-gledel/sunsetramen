import React, { useState } from "react";
import FilterSection from "../../components/filters/FilterSection";
import RamenList from "../../components/ramens/RamenList";
import ramenList from "../../data/ramenList";
import s from './menu.module.scss'; // Importation du fichier CSS module

const Menu = () => {
  const [filters, setFilters] = useState({
    spiciness: [],
    vegetarian: false,
    vegan: false,
    types: [],
  });

  const handleAddToCart = (ramen) => {
    console.log(`Ajouté au panier : ${ramen.title}`);
  };

  return (
    <div className="container__main container__blue container__paper">
        <div className={s.menuContainer}>
        <h1 className="h1_menu"><span>le menu</span></h1>
        <div className={s.menu_content}>
            <FilterSection filters={filters} setFilters={setFilters} />
            <RamenList ramens={ramenList} filters={filters} onAddToCart={handleAddToCart} />
        </div>
        </div>
    </div>
  );
};

export default Menu;
