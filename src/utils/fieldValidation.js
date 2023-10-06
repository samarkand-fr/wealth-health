/**
 * Represents the result of a field validation.
 *
 * @typedef {Object} ValidationResult
 * @property {boolean} error - Indicates if the validation has failed.
 * @property {string} message - The error message for the validation.
 */

/**
 * validateField():Validates a form field based on its value and minimum length.
 *
 * @param {string} fieldValue - The value of the field being validated.
 * @param {number} minLength - The minimum length required for the field value.
 * @param {string} errorMsg - The error message to return if validation fails.
 * @returns {ValidationResult} - The result of the validation.
 */
const validateField = (fieldValue, minLength, errorMsg) => {
    // Trim the field value and check its length against the minimum length.
    const error = fieldValue.trim().length < minLength;
  
    return {
      error,
      message: error ? errorMsg : "",
    };
  };
  
  /**
   * Validates an employee form based on a set of validation rules.
   *
   * @param {Object} employee - The employee object to validate.
   * @returns {Object} - An object containing field names as keys and error messages as values for failed validations.
   */
  export const validateEmployeeForm = (employee) => {
    /**
     * Defines validation rules for each field.
     *
     * @type {ValidationRule[]}
     */
    const validationRules = [
      {
        field: "firstName",
        validator: (value) =>
          validateField(
            value,
            2,
            "First name should be at least 2 characters long. Only letters, spaces, and hyphens are allowed."
          ),
      },
      {
        field: "lastName",
        validator: (value) =>
          validateField(
            value,
            2,
            "Last name should be at least 2 characters long. Only letters, spaces, and hyphens are allowed."
          ),
      },
      {
        field: "dateOfBirth",
        validator: (value) =>
          validateField(
            value,
            3,
            "Please enter your date of birth"
          ),
      },
      {
        field: "startDate",
        validator: (value) => validateField(value, 3, "Please enter a date"),
      },
      {
        field: "state",
        validator: (value) => validateField(value, 2, "Please choose a State"),
      },
      {
        field: "department",
        validator: (value) =>
          validateField(value, 3, "Please choose a department"),
      },
      {
        field: "street",
        validator: (value) =>
          validateField(
            value,
            3,
            "The address must contain at least 3 characters. Only letters, numbers, spaces, and hyphens are allowed."
          ),
      },
      {
        field: "city",
        validator: (value) =>
          validateField(
            value,
            3,
            "City is required. Only letters, spaces, and hyphens are allowed."
          ),
      },
      {
        field: "zipCode",
        validator: (value) =>
          validateField(
            value,
            5,
            "The postal code must consist of five numbers only."
          ),
      },
    ];
  
    const errors = {};
  
    // Validate each field based on the defined rules
    // iterates through an array of validation rules,
    // applies each rule to a specific field in the employee object, 
    // and collects validation error messages for those fields.
    validationRules.forEach((rule) => {
      const { field, validator } = rule;
      const { error, message } = validator(employee[field]);
      if (error) {
        errors[field] = message;
      }
    });
  
    return errors;
  };
  