import React from "react";
import PropTypes from "prop-types";
import "../../../assets/styles/styles.css"; 

/**
 * SearchInputField component for displaying a search input field.
 *
 * @param {object} props - The component's properties.
 * @param {function} props.onSearch - The function to handle search input.
 * @returns {JSX.Element} The SearchInputField component.
 */
function SearchInputField({ onSearch }) {
  /**
   * Handle the change event of the search input field.
   * @param {Event} event - The change event.
   */
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
