/**
 * Validates a form field based on its value and minimum length.
 *
 * @param {string} fieldName - The name of the field being validated.
 * @param {string} fieldValue - The value of the field being validated.
 * @param {number} minLength - The minimum length required for the field value.
 * @param {string} errorMsg - The error message to return if validation fails.
 * @returns {Object} - An object containing the field name as the key and the error message as the value (if validation fails).
 */
export const validateField = (fieldName, fieldValue, minLength, errorMsg) => {
  // Trim the field value and check its length against the minimum length.
  if (fieldValue.trim().length < minLength) {
    // If the length is less than the minimum, return an object with the field name and error message.
    return { [fieldName]: errorMsg };
  }
  // If validation passes, return an empty object.
  return {};
};

