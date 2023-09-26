import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../../../assets/styles/styles.css"; // Import the CSS file

/**
 * A reusable input field component.
 *
 * @param {object} props - The component's properties.
 * @param {boolean} props.autoFocus - Determines if the input should be focused when rendered.
 * @param {string} props.type - The type of input (e.g., "text", "number", "date").
 * @param {string} props.name - The name of the input field.
 * @param {string|number} props.value - The value of the input field.
 * @param {function} props.onChange - The function to call when the input value changes.
 * @param {string} [props.id] - The id of the input field (optional).
 * @returns {JSX.Element} The input field component.
 */
function InputField({ autoFocus, type, name, id, value, onChange }) {
  const [maxDate, setMaxDate] = useState("");

  // Calculate the maximum date allowed for date input fields
  // based on the current date and the age being above 18 years.
  useEffect(() => {
    if (type === "date") {
      const today = new Date();
      const maxYear = today.getFullYear() - 18;
      today.setFullYear(maxYear);
      setMaxDate(today.toISOString().split("T")[0]);
    }
  }, [type, name]);

  // Generate a unique input ID based on the 'id' or 'name' prop.
  const inputId = `${id || name}-input`;

  return (
    <div className="input-container">
      <input
        autoFocus={autoFocus}
        type={type}
        name={name}
        value={value}
        id={inputId}
        onChange={onChange}
        max={name !== "startDate" ? maxDate : undefined}
        className="input-field"
      />
    </div>
  );
}

InputField.propTypes = {
  autoFocus: PropTypes.bool,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string,
};

export default InputField;
