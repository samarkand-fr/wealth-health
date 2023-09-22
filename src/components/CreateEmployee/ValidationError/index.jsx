

import React from "react";
import PropTypes from "prop-types";
import "../../../assets/styles/styles.css"; 
function ValidationError({ message, className }) {
  const wrapperClassName =
    className === "departmentError"
      ? "department-error-wrapper"
      : "validation-error-wrapper";
  return ( 
  <>
    <span 
       className={wrapperClassName}>{message}
    </span>
  </>
  );
}
ValidationError.propTypes = {
  message: PropTypes.string.isRequired,
  className: PropTypes.string,
};
export default ValidationError;

