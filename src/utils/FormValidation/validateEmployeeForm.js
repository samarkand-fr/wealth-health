import { validateField } from "./fieldValidator";

// Custom field validation function
const validateCustomField = (
  value,
  minLength,
  regex,
  lengthErrorMessage,
  regexErrorMessage
) => {
  let error = "";
  if (value.trim().length < minLength) {
    error = lengthErrorMessage;
  } else if (!regex.test(value)) {
    error = regexErrorMessage;
  }
  return error;
};

// Main employee form validation function
export const validateEmployeeForm = (employee) => {
  return {
    // Validation for 'dateOfBirth' field
    ...validateField(
      "dateOfBirth",
      employee.dateOfBirth,
      3,
      "Please enter your date of birth"
    ),

    // Validation for 'startDate' field
    ...validateField("startDate", employee.startDate, 3, "Please enter a date"),

    // Validation for 'state' field
    ...validateField("state", employee.state, 2, "Please choose a State"),

    // Validation for 'department' field
    ...validateField(
      "department",
      employee.department,
      3,
      "Please choose a department"
    ),

    // Custom validation for 'firstName' field
    firstName: validateCustomField(
      employee.firstName,
      2,
      /^[a-zA-ZÀ-ÿ\s-]+$/i,
      "First name should be at least 2 characters long.",
      "Only letters, spaces, and hyphens are allowed."
    ),

    // Custom validation for 'lastName' field
    lastName: validateCustomField(
      employee.lastName,
      2,
      /^[a-zA-ZÀ-ÿ\s-]+$/i,
      "Last name should be at least 2 characters long.",
      "Only letters, spaces, and hyphens are allowed."
    ),

    // Custom validation for 'street' field
    street: validateCustomField(
      employee.street,
      3,
      /^[a-zA-Z0-9À-ÿ\s-]+$/i,
      "The address must contain at least 3 characters.",
      "Only letters, numbers, spaces, and hyphens are allowed."
    ),

    // Custom validation for 'city' field
    city: validateCustomField(
      employee.city,
      3,
      /^[a-zA-ZÀ-ÿ\s-]+$/i,
      "City is required",
      "Only letters, spaces, and hyphens are allowed."
    ),

    // Validation for 'zipCode' field
    zipCode:
      employee.zipCode.trim().length !== 5 || !/^\d{5}$/.test(employee.zipCode)
        ? "The postal code must consist of five numbers only."
        : "",
  };
};
