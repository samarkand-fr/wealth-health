import React from "react";
import PropTypes from "prop-types";
import "../../../assets/styles/styles.css"; // Import the CSS file
function SaveButton({ onClick }) {
  return (
    <div className="submit-button-container">
      <button className="save-button" type="submit" onClick={onClick} aria-label="Save Button">
        Save
      </button>
    </div>
  );
}
SaveButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default SaveButton;
