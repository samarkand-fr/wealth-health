import React from "react";
import PropTypes from "prop-types";
import "../../../assets/styles/styles.css"; 

/**
 * PageSizeSelector component for displaying a page size selector.
 *
 * @param {object} props - The component's properties.
 * @param {function} props.onEntriesChange - The function to handle page size change.
 * @returns {JSX.Element} The PageSizeSelector component.
 */
function PageSizeSelector({ onEntriesChange }) {
  /**
   * Handle the change event of the page size selector.
   * @param {Event} event - The change event.
   */
  const handleSelectChange = (event) => {
    onEntriesChange(parseInt(event.target.value, 10));
  };

  return (
    <div className="div">
      <label htmlFor="entriesSelect">Show</label>
      <select
        className="select"
        id="entriesSelect"
        onChange={handleSelectChange}
        aria-label="Number of entries per page"
      >
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      <span>entries</span>
    </div>
  );
}

PageSizeSelector.propTypes = {
  onEntriesChange: PropTypes.func.isRequired,
};

export default PageSizeSelector;
