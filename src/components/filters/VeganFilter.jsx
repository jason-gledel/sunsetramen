import React from 'react';

const VeganFilter = ({ filters, setFilters, scrollToTop }) => {
  const handleChange = (event) => {
    const { checked } = event.target;
    setFilters({
      ...filters,
      vegan: checked,
    });
    scrollToTop(); // Remonter la page en haut après le changement de filtre
  };

  return (
    <div className="filterContainer">
      <label className="veganLabel">
        Vegan
        <input
          type="checkbox"
          checked={filters.vegan || false}
          onChange={handleChange}
          className="veganInput"
        />
      </label>
    </div>
  );
};

export default VeganFilter;
