import React from 'react';

const VegetarianFilter = ({ filters, setFilters, scrollToTop }) => {
  const handleChange = (event) => {
    const { checked } = event.target;
    setFilters({
      ...filters,
      vegetarian: checked,
    });
    scrollToTop(); // Remonter la page en haut après le changement de filtre
  };

  return (
    <div className="filterContainer">
      <label className="vegeLabel">
        Végétarien
        <input
          type="checkbox"
          checked={filters.vegetarian || false}
          onChange={handleChange}
          className="vegeInput"
        />
      </label>
    </div>
  );
};

export default VegetarianFilter;
