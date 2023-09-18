import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { updateEmployee } from "../../redux/slices/employeeSlice";
import "../../assets/styles/styles.css";
import FormField from "../../components/CreateEmployee/FormFields";
import Header from "../../components/Header";
import SaveButton from "../../components/CreateEmployee/SaveButton"
const EditEmployeeForm = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation(); // Get location object

  const [employeeData, setEmployeeData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department : "",
  });
  const showErrors = useSelector((state) => state.employee.showErrors);

  useEffect(() => {
    const [firstName, lastName] = name.split("-");
    const fetchedEmployeeData = {
      firstName,
      lastName,
      dateOfBirth: "1990-01-01",
      startDate: "2022-01-01",
      street: "123 Main St",
      city: "City",
      state: "State",
      zipCode: "12345",
      department : "sales"
    };

    // Check if employeeData exists in the location state and use it if available
    const locationEmployeeData = location.state && location.state.employeeData;

    if (locationEmployeeData) {
      setEmployeeData(locationEmployeeData);
    } else {
      setEmployeeData(fetchedEmployeeData);
    }
  }, [name, location.state]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({
      ...employeeData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateEmployee(employeeData));
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
      label="State"
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
              label="Department"
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

