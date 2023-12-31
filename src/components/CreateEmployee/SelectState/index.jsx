import React from "react";
import PropTypes from "prop-types";
import { states } from "../../../data/statesData";
import "../../../assets/styles/styles.css"; 

/**
 * StateSelect component for selecting a state from a dropdown list.
 *
 * @param {object} props - The component's properties.
 * @param {string} props.name - The name attribute for the select element.
 * @param {string} props.value - The selected value for the select element.
 * @param {function} props.onChange - The function to call when the selected value changes.
 * @param {string} props.id - The id attribute for the select element.
 * @returns {JSX.Element} The StateSelect component.
 */
function StateSelect({ name, value, onChange, id }) {
  return (
    <div>
      <label htmlFor={id}>State:</label>
      <select
        className="state-select-wrapper"
        name={name}
        value={value}
        onChange={onChange}
        id={id}
      >
        <option value="">Please choose a state</option>
        {states.map((state, index) => (
          <option key={index} value={state.abbreviation}>
            {state.name}
          </option>
        ))}
      </select>
    </div>
  );
}

StateSelect.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default StateSelect;
