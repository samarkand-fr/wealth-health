import React from "react";
import PropTypes from "prop-types";
import "../../../assets/styles/styles.css"; // Import the CSS file

/**
 * SaveButton component for triggering a save action.
 *
 * @param {object} props - The component's properties.
 * @param {function} props.onClick - The function to call when the button is clicked.
 * @returns {JSX.Element} The SaveButton component.
 */
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
