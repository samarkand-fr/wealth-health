import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../../../assets/styles/styles.css"; // Import the CSS file

function InputField({ autoFocus, type, name, id, value, onChange }) {
  const [maxDate, setMaxDate] = useState("");

  // calculate the maximum date allowed for date input fields
  // based on the current date and the age is above 18 years.
  useEffect(() => {
    if (type === "date") {
      const today = new Date();
      const maxYear = today.getFullYear() - 18;
      today.setFullYear(maxYear);
      setMaxDate(today.toISOString().split("T")[0]);
    }
  }, [type, name]);

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
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string,
};

export default InputField;
