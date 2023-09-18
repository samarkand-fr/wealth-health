

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
