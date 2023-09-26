import PropTypes from "prop-types";
import departments from "../../../data/departementData";
import React from "react";
import "../../../assets/styles/styles.css";

/**
 * DepartmentSelect component for selecting a department from a dropdown list.
 *
 * @param {object} props - The component's properties.
 * @param {string} props.name - The name attribute for the select element.
 * @param {string} props.value - The selected value for the select element.
 * @param {function} props.onChange - The function to call when the selected value changes.
 * @returns {JSX.Element} The DepartmentSelect component.
 */
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
