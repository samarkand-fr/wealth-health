export function generateDataTableColumns(handleIconClick, isMobile) {
  const columns = [
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
