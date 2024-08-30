import React from 'react';
import SpicinessFilter from './SpicinessFilter';
import VegetarianFilter from './VegetarianFilter';
import VeganFilter from './VeganFilter';
import s from './FilterSection.module.scss';

const FilterSection = ({ filters, setFilters }) => {

  // Fonction pour remonter la page en haut
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={s.filter_container}>
      <SpicinessFilter filters={filters} setFilters={setFilters} scrollToTop={scrollToTop} />
      <VegetarianFilter filters={filters} setFilters={setFilters} scrollToTop={scrollToTop} />
      <VeganFilter filters={filters} setFilters={setFilters} scrollToTop={scrollToTop} />
    </div>
  );
};

export default FilterSection;
