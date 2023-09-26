import React from "react";
import PropTypes from "prop-types";
import ValidationError from "../ValidationError";
import InputField from "../DateInput";
import StateSelect from "../SelectState";
import DepartmentSelect from "../SelectDepartment";
import "../../../assets/styles/styles.css";

/**
 * A dynamic form field component that renders different input types based on the 'type' prop.
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
 * @param {string|React.Component} [props.labelComponent] - The component to use for rendering the label (default: "label").
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
  labelComponent: LabelComponent = "label",
}) => {
  // Generate a unique input ID based on the 'id' or 'name' prop.
  const inputId = id || name;

  // Define the input field based on the 'type' prop.
  let inputField;
  switch (type) {
    case "text":
    case "date":
      inputField = (
        <InputField
          className="input-text"
          type={type}
          name={name}
          id={inputId}
          value={value}
          onChange={onChange}
          aria-label={label}
          aria-labelledby={inputId}
        />
      );
      break;
    case "stateSelect":
      inputField = (
        <StateSelect
          name={name}
          id={inputId}
          value={value}
          onChange={onChange}
        />
      );
      break;
    case "departmentSelect":
      // Consider moving the labelComponent assignment outside the switch statement
      LabelComponent = "div";
      inputField = (
        <DepartmentSelect
          name={name}
          id={inputId}
          value={value}
          onChange={onChange}
          aria-label={label}
          aria-labelledby={inputId}
        />
      );
      break;
    default:
      inputField = (
        <InputField
          className="input-text"
          type="text"
          name={name}
          id={inputId}
          value={value}
          onChange={onChange}
          aria-label={label}
          aria-labelledby={inputId}
        />
      );
  }

  return (
    <div className="form-field">
      <LabelComponent htmlFor={inputId}>
        {label}
        {inputField}
      </LabelComponent>
      {showError && error && <ValidationError message={error} />}
    </div>
  );
};

FormFields.propTypes = {
  labelComponent: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.oneOf(["text", "date", "stateSelect", "departmentSelect"]),
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  showError: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

FormFields.defaultProps = {
  error: "",
};

export default FormFields;
