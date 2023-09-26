import React from "react";
import PropTypes from "prop-types";
import "../../../assets/styles/styles.css";

/**
 * ValidationError component for displaying an error message.
 *
 * @param {object} props - The component's properties.
 * @param {string} props.message - The error message to display.
 * @param {string} [props.className] - Additional class name for styling (optional).
 * @returns {JSX.Element} The ValidationError component.
 */
function ValidationError({ message, className }) {
  // Determine the wrapper class name based on the 'className' prop.
  const wrapperClassName = className === "departmentError" ? "department-error-wrapper" : "validation-error-wrapper";

  return (
    <>
      <span className={wrapperClassName}>{message}</span>
    </>
  );
}

ValidationError.propTypes = {
  message: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ValidationError;
