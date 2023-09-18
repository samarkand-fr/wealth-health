

import React from "react";
import PropTypes from "prop-types";
import { states } from "../../../data/statesData";
import "../../../assets/styles/styles.css"; // Import the CSS file

function StateSelect({ name, value, onChange, id }) {
  return (
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
  );
}

StateSelect.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default StateSelect;
