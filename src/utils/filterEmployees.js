/**
 * Filters a list of employees based on search text and limits the number of results.
 *
 * @param {Array} data - The array of employee data to filter.
 * @param {string} searchText - The text to search for within employee data.
 * @param {number} perPage - The maximum number of results to return.
 * @returns {Array} An array of filtered employee data, limited by the specified perPage value.
 */
const filterEmployees = (data, searchText, perPage) => {
  let filtered = [...data]; // Create a copy of the data to filter

  if (searchText) {
    // Filter employees based on search text
    filtered = filtered.filter((employee) =>
      Object.values(employee)
        .join(" ")
        .toLowerCase()
        .includes(searchText.toLowerCase())
    );
  }

  return filtered.slice(0, perPage);
};

export default filterEmployees;
