
export const validateField = (fieldName, fieldValue, minLength, errorMsg) => {
  if (fieldValue.trim().length < minLength) {
    return { [fieldName]: errorMsg };
  }
  return {};
};

