import React, { useState } from 'react';
import s from './SpicinessFilter.module.scss';

const SpicinessFilter = ({ filters, setFilters }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSpicinessChange = (value) => {
    setFilters((prevFilters) => {
      const isSelected = filters.spiciness.includes(value);
      const newSpiciness = isSelected
        ? prevFilters.spiciness.filter((level) => level !== value)
        : [...prevFilters.spiciness, value];
      
      return { ...prevFilters, spiciness: newSpiciness };
    });
  };

  return (
    <div className="filterItem">
      <p
        onClick={() => setShowDropdown(!showDropdown)}
        className="dropdownHeader"
      >
        Degré de piquance
        <i className={`icon-arrow-down ${showDropdown ? s.rotateIcon : ''}`}></i>
      </p>
      {showDropdown && (
        <div className="spicinessOptions">
          <label>
            <span className="checkSpice">
              <input
                type="checkbox"
                value={1}
                checked={filters.spiciness.includes(1)}
                onChange={() => handleSpicinessChange(1)}
                className="spiceInput"
              />
              Légèrement épicé
            </span>
            <span className="fireDiv"><i className="icon-fire-full"></i><i className="icon-fire-stroke"></i><i className="icon-fire-stroke"></i></span>
          </label>
          <label>
            <span className="checkSpice">
              <input
                type="checkbox"
                value={2}
                checked={filters.spiciness.includes(2)}
                onChange={() => handleSpicinessChange(2)}
                className="spiceInput"
              />
              Pique fort
            </span>

            <span className="fireDiv"><i className="icon-fire-full"></i><i className="icon-fire-full"></i><i className="icon-fire-stroke"></i></span>
          </label>
          <label>
          <span className="checkSpice">
            <input
              type="checkbox"
              value={3}
              checked={filters.spiciness.includes(3)}
              onChange={() => handleSpicinessChange(3)}
              className="spiceInput"
            />
            De la lave
          </span>

          <span className="fireDiv"><i className="icon-fire-full"></i><i className="icon-fire-full"></i><i className="icon-fire-full"></i></span>
          </label>
        </div>
      )}
    </div>
  );
};

export default SpicinessFilter;
