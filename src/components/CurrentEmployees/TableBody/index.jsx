import React, { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setEmployees } from "../../../redux/slices/employeeSlice";
import DataTable from "react-data-table-component";
import ErrorHandler from "../ErrorTableHandler";
import EmployeeDetailsModal from "../EmployeeDetailsModal";
import { generateDataTableColumns } from "../../../utils/DataTableUtils";
import useResponsive from "../../../utils/useResponsive";
import filterEmployees from "../../../utils/filterEmployees";
import TableHeader from "../TableHeader";
import { useNavigate } from "react-router-dom";
import mockedEmployees from "../../../data/MockedEmployees"; // Import the mock data

function EmployeeTable() {
  const { employees } = useSelector((state) => state.employee);
  const dispatch = useDispatch();
  const { isMobile } = useResponsive();

  const [perPage, setPerPage] = useState(10);
  const [searchText, setSearchText] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [searchItemNotFound, setSearchItemNotFound] = useState(false);
  const [useMockedData, setUseMockedData] = useState(false); // Flag to switch data source

  // Toggle between mocked and actual data
  const toggleData = () => {
    setUseMockedData(!useMockedData);
  };

  // Data source based on the flag
  const data = useMockedData ? mockedEmployees : employees;

  // Filter the data array based on searchText
  const filteredData = useMemo(() =>
    filterEmployees(data, searchText, perPage),
    [data, searchText, perPage]
  );

  const handleSearch = (newSearchText) => {
        setSearchText(newSearchText);
        //  check if the search item exists here
        const isItemFound = employees.some((employee) => {
          if (employee && employee.name) {
            return employee.name.toLowerCase().includes(newSearchText.toLowerCase());
          }
          return false; // Return false for undefined or null employees
        });
      
        setSearchItemNotFound(!isItemFound);
      };
  // Routing
   const navigate = useNavigate();
  // Event handlers
  const handleEntriesChange = (newPerPage) => setPerPage(newPerPage);
  
  const handleRowClick = (row) => {
    if (!isMobile) return;
    setSelectedEmployee(row);
    setModalOpen(true);
  };

  const handleIconClick = (e, row) => {
    e.stopPropagation();
    setSelectedEmployee(row);
    setModalOpen(true);
  };

  const handleClearData = () => {
    localStorage.removeItem("employees");
    dispatch(setEmployees([]));
    navigate("/");
  };

  const columns = generateDataTableColumns(handleIconClick, isMobile);
  const handleModalClose = () => {
    setModalOpen(false);
    navigate("/view-employees");
  };

  // Determine whether to show the reset button
  const showResetButton = !useMockedData && filteredData.length > 0;
  return (
    <div>
      <div className="btn-container">
       <button className="data-btn" onClick={toggleData}>
        {useMockedData ? "Switch to Actual Data" : "Switch to Mocked Data"}
      </button>
      </div>
      <DataTable
          data={filteredData}
        pagination
        responsive
        highlightOnHover
        subHeader
        subHeaderComponent={
          <TableHeader
            onEntriesChange={handleEntriesChange}
            onSearch={handleSearch}
          />
        }
        subHeaderAlign="right"
        noDataComponent={<ErrorHandler searchItemNotFound={searchItemNotFound} />}
        customStyles={{ subHeader: { style: { display: "initial" } } }}
        onRowClicked={handleRowClick}
        columns={columns}
      />

      <EmployeeDetailsModal
        isOpen={modalOpen}
        onClose={handleModalClose}
        employee={selectedEmployee}
      />
        {showResetButton && (
        <div className="btn-container">
          <button className="reset-button" onClick={handleClearData}>
            Reset
          </button>
        </div>
      )}
    </div>
  );
}
export default EmployeeTable;