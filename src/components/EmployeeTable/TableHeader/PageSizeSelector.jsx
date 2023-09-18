
import React from "react";
import PropTypes from "prop-types";
import "../../../assets/styles/styles.css"; // Import the CSS file

function PageSizeSelector({ onEntriesChange }) {
  const handleSelectChange = (event) => {
    onEntriesChange(parseInt(event.target.value, 10));
  };

  return (
    <div className="div">
      <label>Show </label>
      <select className="select" onChange={handleSelectChange}>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      <label> entries</label>
    </div>
  );
}

PageSizeSelector.propTypes = {
  onEntriesChange: PropTypes.func.isRequired,
};

export default PageSizeSelector;
