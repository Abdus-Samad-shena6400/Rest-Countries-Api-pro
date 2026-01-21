import React from "react";

const Search = ({ searchTerm, setSearchTerm, region, setRegion }) => {
  return (
    <div className="search-filter-container">
      <div className="search-container">
        <i className="fa-solid fa-magnifying-glass-location"></i>
        <input
          type="text"
          placeholder="search for a country..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </div>

      <select
        onChange={(e) => setRegion(e.target.value)}
        value={region}
        className="filter-by-region"
      >
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Search;
