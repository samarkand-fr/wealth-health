// // EmployeeTable.js
// import React, { useState , useMemo} from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { setEmployees } from "../../../redux/slices/employeeSlice";
// import DataTable from "react-data-table-component";
// import ErrorHandler from "../../CurrentEmployees/ErrorHandler";
// import EmployeeDetailsModal from "../../CurrentEmployees/EmployeeDetailsModal";
// import { generateDataTableColumns } from "../../../utils/DataTableUtils";
// import useResponsive from "../../../utils/useResponsive"; // Import the custom hook
// import filterEmployees from "../../../utils/filterEmployees";
// import TableHeader from "../TableHeader";
// import { useNavigate } from "react-router-dom";

// function EmployeeTable() {
//   const { employees } = useSelector((state) => state.employee);
//   const dispatch = useDispatch();
//   const { isMobile} = useResponsive();

//   // Local component state
//   const [perPage, setPerPage] = useState(10);
//   const [searchText, setSearchText] = useState("");
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedEmployee, setSelectedEmployee] = useState(null);
//   const [searchItemNotFound, setSearchItemNotFound] = useState(false);


//   // Routing
//    const navigate = useNavigate();
   
//   // Event handlers
//   const handleEntriesChange = (newPerPage) => setPerPage(newPerPage);
 
//   const handleSearch = (newSearchText) => {
//     setSearchText(newSearchText);
    
//     // Define your logic to check if the search item exists here
//     const isItemFound = employees.some((employee) => {
//       if (employee && employee.name) {
//         return employee.name.toLowerCase().includes(newSearchText.toLowerCase());
//       }
//       return false; // Return false for undefined or null employees
//     });
  
//     setSearchItemNotFound(!isItemFound);
//   };
  
//   const handleRowClick = (row) => {
//     if (!isMobile) return;
//     setSelectedEmployee(row);
//     setModalOpen(true);
//   };

//   const handleIconClick = (e, row) => {
//     e.stopPropagation();
//     setSelectedEmployee(row);
//     setModalOpen(true);
//   };

//   const handleClearData = () => {
//     localStorage.removeItem("employees");
//     dispatch(setEmployees([]));
//     navigate("/");
//   };

//   // Filtering and updating employee data
//   const filteredEmployees = useMemo(() =>
//     filterEmployees(employees, searchText, perPage),
//     [employees, searchText, perPage]
//   );

 
  
//   const columns = generateDataTableColumns(handleIconClick, isMobile);

//   const handleModalClose = () => {
//     setModalOpen(false);
//     navigate("/view-employees");
//   };

//   return (
//     <div>
//       <DataTable
//         data={filteredEmployees}
//         pagination
//         responsive
//         highlightOnHover
//         subHeader
//         subHeaderComponent={
//           <TableHeader
//             onEntriesChange={handleEntriesChange}
//             onSearch={handleSearch}
//           />
//         }
//         subHeaderAlign="right"
//         ErrorHandler={<ErrorHandler searchItemNotFound={searchItemNotFound} />}
//         customStyles={{ subHeader: { style: { display: "initial" } } }}
//         onRowClicked={handleRowClick}
//         columns={columns}
//       />

//       <EmployeeDetailsModal
//         isOpen={modalOpen}
//         onClose={handleModalClose}
//         employee={selectedEmployee}
//       />
//       <div className="bottom-container">
//         <button className="reset-button" onClick={handleClearData}>
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// }

// export default EmployeeTable;



import React, { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setEmployees } from "../../../redux/slices/employeeSlice";
import DataTable from "react-data-table-component";
import EmployeeDetailsModal from "../../CurrentEmployees/EmployeeDetailsModal";
import { generateDataTableColumns } from "../../../utils/DataTableUtils";
import useResponsive from "../../../utils/useResponsive"; // Import the custom hook
import filterEmployees from "../../../utils/filterEmployees";
import TableHeader from "../TableHeader";
import { useNavigate } from "react-router-dom";

function EmployeeTable() {
  const { employees } = useSelector((state) => state.employee);
  const dispatch = useDispatch();
  const { isMobile } = useResponsive();

  // Local component state
  const [perPage, setPerPage] = useState(10);
  const [searchText, setSearchText] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  // Routing
  const navigate = useNavigate();

  // Event handlers
  const handleEntriesChange = (newPerPage) => setPerPage(newPerPage);

  const handleSearch = (newSearchText) => {
    setSearchText(newSearchText);
  };

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

  // Filtering and updating employee data
  const filteredEmployees = useMemo(
    () => filterEmployees(employees, searchText, perPage),
    [employees, searchText, perPage]
  );

  const columns = generateDataTableColumns(handleIconClick, isMobile);

  const handleModalClose = () => {
    setModalOpen(false);
    navigate("/view-employees");
  };

  return (
    <div>
      <DataTable
        data={filteredEmployees}
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
        customStyles={{ subHeader: { style: { display: "initial" } } }}
        onRowClicked={handleRowClick}
        columns={columns}
      />

      <EmployeeDetailsModal
        isOpen={modalOpen}
        onClose={handleModalClose}
        employee={selectedEmployee}
      />
      <div className="bottom-container">
        <button className="reset-button" onClick={handleClearData}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default EmployeeTable;
