import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setEmployees } from "../../redux/slices/employeeSlice";
import "../../assets/styles/styles.css";
import FormField from "../../components/CreateEmployee/FormFields";
import Header from "../../components/Header";
import SaveButton from "../../components/CreateEmployee/SaveButton";

const EditEmployeeForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

// State to hold the selected employee's data
  const [selectedEmployeeData, setSelectedEmployeeData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  });

// State to hold the form data
  const [employeeData, setEmployeeData] = useState(selectedEmployeeData);
  const employees = useSelector((state) => state.employee.employees);
  const showErrors = useSelector((state) => state.employee.showErrors);

  useEffect(() => {
    // Check if employeeData exists in the location state and use it if available
    const locationEmployeeData =
      location.state && location.state.employeeData;

    if (locationEmployeeData) {
      setSelectedEmployeeData(locationEmployeeData);
      setEmployeeData(locationEmployeeData);
    } else {
      setSelectedEmployeeData(selectedEmployeeData);
      setEmployeeData(selectedEmployeeData);
    }
  }, [location.state, selectedEmployeeData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({
      ...employeeData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  // Clone the selected employee's data with updated information
    const updatedEmployee = { ...selectedEmployeeData, ...employeeData };
  // Remove the old employee data (based on firstName and lastName) from the employees array
    const updatedEmployees = employees.map((employee) =>
      employee.firstName === selectedEmployeeData.firstName &&
      employee.lastName === selectedEmployeeData.lastName
        ? updatedEmployee
        : employee
    );
  // Dispatch the setEmployees action with the updated employees array
    dispatch(setEmployees(updatedEmployees));
    navigate("/view-employees");
  };
  return (
    <section>
      <Header />
      <h1 className="section-title">Edit Employee</h1>
       <form onSubmit={handleSubmit}>
        <div className="form-content">
          <div className="identity-content">
            <FormField
              label="First Name"
              type="text"
              name="firstName"
              id="firstName"
              value={employeeData.firstName}
              onChange={handleInputChange}
              showError={showErrors}
            />
            <FormField
              label="Last Name"
              type="text"
              name="lastName"
              id="lastName"
              value={employeeData.lastName}
              onChange={handleInputChange}
              showError={showErrors}
            />
            <FormField
              label="Date of Birth"
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              value={employeeData.dateOfBirth}
              onChange={handleInputChange}
              showError={showErrors}
            />
            <FormField
              label="Start Date"
              type="date"
              name="startDate"
              id="startDate"
              value={employeeData.startDate}
              onChange={handleInputChange}
              showError={showErrors}
            />
          </div>
          <div className="address-content">
            <FormField
              label="Street"
              type="text"
              name="street"
              id="street"
              value={employeeData.street}
              onChange={handleInputChange}
              showError={showErrors}
            />
            <FormField
              label="City"
              type="text"
              name="city"
              id="city"
              value={employeeData.city}
              onChange={handleInputChange}
              showError={showErrors}
            />
            <FormField
              type="stateSelect"
              name="state"
              id="state"
              value={employeeData.state}
              onChange={handleInputChange}
              showError={showErrors}
            />
            <FormField
              label="Zip Code"
              type="text"
              name="zipCode"
              id="zipCode"
              value={employeeData.zipCode}
              onChange={handleInputChange}
              showError={showErrors}
            />
            
          </div>
          <div className="department-container">
          <div className="department-container-label">
            <FormField
              labelComponent="Department"
              type="departmentSelect"
              name="department"
              id="department"
              value={employeeData.department}
              onChange={handleInputChange}
              showError={showErrors}
            />
          </div>
         </div>
        <SaveButton onClick={handleSubmit} />
        </div>
       </form>
    </section>
  );
};
export default EditEmployeeForm;
