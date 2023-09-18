
import PropTypes from "prop-types";
import departments from "../../../data/departementData";
import React from "react"; // Don't forget to import React if you haven't already.
import "../../../assets/styles/styles.css"; // Import your CSS file

function DepartmentSelect({ name, value, onChange }) {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="DepartmentSelectWrapper" 
    >
      <option value="">Please select a department</option>
      {departments.map((department) => (
        <option key={department} value={department}>
          {department}
        </option>
      ))}
    </select>
  );
}

DepartmentSelect.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DepartmentSelect;
