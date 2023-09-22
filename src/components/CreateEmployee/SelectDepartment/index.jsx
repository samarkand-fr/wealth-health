import PropTypes from "prop-types";
import departments from "../../../data/departementData";
import React from "react";
import "../../../assets/styles/styles.css";

function DepartmentSelect({ name, value, onChange }) {
  return (
    <div>
      <label htmlFor={name}>Department</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="DepartmentSelectWrapper"
        id={name} 
      >
        <option value="">Please select a department</option>
        {departments.map((department) => (
          <option key={department} value={department}>
            {department}
          </option>
        ))}
      </select>
    </div>
  );
}

DepartmentSelect.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DepartmentSelect;
