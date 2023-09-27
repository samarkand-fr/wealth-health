import React from "react";
import PropTypes from "prop-types";
import ValidationError from "../ValidationError";
import InputField from "../DateInput";
import StateSelect from "../SelectState";
import DepartmentSelect from "../SelectDepartment";
import "../../../assets/styles/styles.css";

// Define a mapping of input components based on their types
const inputComponents = {
  text: InputField,
  date: InputField,
  stateSelect: StateSelect,
  departmentSelect: DepartmentSelect,
};

// Define a mapping of label components based on their types
const labelComponents = {
  text: "label",
  date: "label",
  stateSelect: "state-label",
  departmentSelect: "department-label",
};

/**
 * Component that renders different input types based on the 'type' prop.
 *
 * @param {object} props - The component's properties.
 * @param {string} props.label - The label for the form field.
 * @param {string} props.type - The type of form field (e.g., "text", "date", "stateSelect", "departmentSelect").
 * @param {string} props.name - The name of the form field.
 * @param {string} props.id - The id of the form field.
 * @param {string} props.value - The value of the form field.
 * @param {function} props.onChange - The function to call when the form field value changes.
 * @param {boolean} props.showError - Determines whether to display an error message.
 * @param {string} props.error - The error message to display (if showError is true).
 * @returns {JSX.Element} The form field component.
 */
const FormFields = ({
  label,
  type,
  name,
  id,
  value,
  onChange,
  showError,
  error,
}) => {
  // Generate a unique input ID based on the 'id' or 'name' prop.
  const inputId = `${id || name}-input`;

  // Get the corresponding InputComponent and LabelComponent based on the 'type'
  const InputComponent = inputComponents[type] || InputField;
  const LabelComponent = labelComponents[type] || "label";

  return (
    <div className="form-field">
      {/* Label for the form field */}
      <LabelComponent htmlFor={inputId}>
        {label}
        {/* Input component */}
        <InputComponent
          className={type === "text" ? "input-text" : ""}
          type={type === "date" ? "date" : "text"}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          aria-label={label}
          aria-labelledby={inputId}
        />
      </LabelComponent>

      {/* Display an error message if 'showError' is true */}
      {showError && error && <ValidationError message={error} />}
    </div>
  );
};

FormFields.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(["text", "date", "stateSelect", "departmentSelect"]),
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  showError: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

FormFields.defaultProps = {
  error: "",
};

export default FormFields;
