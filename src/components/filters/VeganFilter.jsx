import React from 'react';


const VeganFilter = ({ filters, setFilters }) => {
  const handleChange = (event) => {
    const { checked } = event.target;
    setFilters({
      ...filters,
      vegan: checked,
    });
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
