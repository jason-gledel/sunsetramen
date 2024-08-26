import React from 'react';


const VegetarianFilter = ({ filters, setFilters }) => {
  const handleChange = (event) => {
    const { checked } = event.target;
    setFilters({
      ...filters,
      vegetarian: checked,
    });
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
