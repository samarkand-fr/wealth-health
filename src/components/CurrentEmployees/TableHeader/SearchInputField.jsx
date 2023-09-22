import React from "react";
import PropTypes from "prop-types";
import "../../../assets/styles/styles.css"; // Import the CSS file

function SearchInputField({ onSearch }) {
  const handleSearchChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="search-container">
       <label htmlFor="searchInput">Search by text or date:</label>
      <input
        className="search-input"
        type="search"
        id="searchInput"
        onChange={handleSearchChange}
        placeholder="text or date"
      />
    </div>
  );
}

SearchInputField.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchInputField;
