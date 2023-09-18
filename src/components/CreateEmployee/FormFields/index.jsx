
import ValidationError from "../ValidationError";
import InputField from "../DateInput";
import StateSelect from "../SelectState";
import DepartmentSelect from "../SelectDepartment";
import PropTypes from "prop-types";
import "../../../assets/styles/styles.css"; // Import the CSS file

const FormFields = ({
  label,
  type,
  name,
  id,
  value,
  onChange,
  showError,
  error,
  labelComponent: LabelComponent = "label", // Use the tag name as a string
}) => {
  let inputField;

  switch (type) {
    case "text":
    case "date":
      inputField = (
        <InputField
          className="input-text" 
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
        />
      );
      break;
    case "stateSelect":
      inputField = (
        <StateSelect name={name} id={id} value={value} onChange={onChange} />
      );
      break;
    case "departmentSelect":
      LabelComponent = "department-label"; // Use the tag name as a string
      inputField = (
        <DepartmentSelect
          name={name}
          id={id}
          value={value}
          onChange={onChange}
        />
      );
      break;
    default:
      inputField = (
        <InputField
          className="input-text" 
          type="text"
          name={name}
          id={id}
          value={value}
          onChange={onChange}
        />
      );
  }

  return (
    <>
      <LabelComponent htmlFor={id}>
        {label}
        {inputField}
      </LabelComponent>
      {showError && error && <ValidationError message={error} />}
    </>
  );
};

FormFields.propTypes = {
  labelComponent: PropTypes.string,
  label: PropTypes.string.isRequired,
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
