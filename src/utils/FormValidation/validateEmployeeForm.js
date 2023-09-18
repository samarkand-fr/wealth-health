
import { validateField } from "./fieldValidator";

const validateCustomField = (value, minLength, regex, lengthErrorMessage, regexErrorMessage) => {
  if (value.trim().length < minLength) {
    return lengthErrorMessage;
  } else if (!regex.test(value)) {
    return regexErrorMessage;
  }
  return "";
};

export const validateEmployeeForm = (employee) => {
  return {
    dateOfBirth: validateField("dateOfBirth", employee.dateOfBirth, 3, "Please enter your date of birth"),
    startDate: validateField("startDate", employee.startDate, 3, "Please enter a date"),
    state: validateField("state", employee.state, 2, "Please choose a State"),
    department: validateField("department", employee.department, 3, "Please choose a department"),
    firstName: validateCustomField(
      employee.firstName,
      2,
      /^[a-zA-ZÀ-ÿ\s-]+$/i,
      "First name should be at least 2 characters long.",
      "Only letters, spaces, and hyphens are allowed."
    ),
    lastName: validateCustomField(
      employee.lastName,
      2,
      /^[a-zA-ZÀ-ÿ\s-]+$/i,
      "Last name should be at least 2 characters long.",
      "Only letters, spaces, and hyphens are allowed."
    ),
    street: validateCustomField(
      employee.street,
      3,
      /^[a-zA-Z0-9À-ÿ\s-]+$/i,
      "The address must contain at least 3 characters.",
      "Only letters, numbers, spaces, and hyphens are allowed."
    ),
    city: validateCustomField(
      employee.city,
      3,
      /^[a-zA-ZÀ-ÿ\s-]+$/i,
      "City is required",
      "Only letters, spaces, and hyphens are allowed."
    ),
    zipCode:
      employee.zipCode.trim().length !== 5 || !/^\d{5}$/.test(employee.zipCode)
        ? "The postal code must consist of five numbers only."
        : "",
  };
};
