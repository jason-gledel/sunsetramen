import React from 'react';
import SpicinessFilter from './SpicinessFilter';
import VegetarianFilter from './VegetarianFilter';
import VeganFilter from './VeganFilter';
import s from './FilterSection.module.scss';

const FilterSection = ({ filters, setFilters }) => {

  console.log(Array.isArray(filters.spiciness)); // Doit être true
  console.log(filters.spiciness);
  

  return (
    <div className={s.filter_container}>
      <SpicinessFilter filters={filters} setFilters={setFilters} />
      <VegetarianFilter filters={filters} setFilters={setFilters} />
      <VeganFilter filters={filters} setFilters={setFilters} />
    </div>
  );
};

export default FilterSection;
