// export default PageSizeSelector;
import React, { useState, useEffect } from "react";
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
  // Initialize the selectedEntries state with a default value of 10
  const [selectedEntries, setSelectedEntries] = useState(10);

  /**
   * Handle the change event of the page size selector.
   * @param {Event} event - The change event.
   */
  const handleSelectChange = (event) => {
    const newSize = parseInt(event.target.value, 10);
    setSelectedEntries(newSize);
    onEntriesChange(newSize);

    // Store the selected page size in localStorage
    localStorage.setItem("selectedEntries", newSize.toString());
  };

  // Use useEffect to retrieve the selected page size from localStorage on component mount
  useEffect(() => {
    const storedEntries = localStorage.getItem("selectedEntries");
    if (storedEntries) {
      const newSize = parseInt(storedEntries, 10);
      setSelectedEntries(newSize);
      onEntriesChange(newSize);
    }
  }, [onEntriesChange]);

  return (
    <div className="div">
      <label htmlFor="entriesSelect">Show</label>
      <select
        className="select"
        id="entriesSelect"
        onChange={handleSelectChange}
        value={selectedEntries} // Set the selected value based on state
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
