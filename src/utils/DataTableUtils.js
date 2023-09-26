/**
 * Generates an array of column objects for a data table.
 *
 * @param {function} handleIconClick - Callback function for handling icon clicks.
 * @param {boolean} isMobile - A boolean flag indicating whether the table is displayed on a mobile device.
 * @returns {Array} An array of column objects.
 */
export function generateDataTableColumns(handleIconClick, isMobile) {
  // Define the base columns that are common for both mobile and larger screens
  const baseColumns = [
    {
      name: "Name",
      selector: (row) => `${row.firstName} ${row.lastName}`,
      sortable: true,
    },
    {
      name: "Start Date",
      selector: (row) => `${row.startDate}`,
      sortable: true,
    },
    {
      name: "Details",
      cell: (row) => (
        <button
          style={{
            backgroundColor: "rgb(147, 173, 24)",
            border: "none",
            padding: "3px",
          }}
          onClick={(e) => handleIconClick(e, row)}
          aria-label="Expand Details"
        >
          <i className="fas fa-plus" style={{ color: "white" }}></i>
        </button>
      ),
      ignoreRowClick: true,
    }
  ];

  // Create a copy of the base columns
  const columns = [...baseColumns];

  if (!isMobile) {
    // Include additional columns for larger screens (tablet and desktop)
    columns.splice(1, 0, 
      {
        name: "Department",
        selector: (row) => `${row.department}`,
        sortable: true,
      },
      {
        name: "Date of Birth",
        selector: (row) => row.dateOfBirth,
        sortable: true,
      },
      {
        name: "City & Street",
        selector: (row) => `${row.city}, ${row.street}`,
        sortable: true,
      },
      {
        name: "State & Zip Code",
        selector: (row) => `${row.state}, ${row.zipCode}`,
        sortable: true,
      }
    );
  }

  return columns;
}
