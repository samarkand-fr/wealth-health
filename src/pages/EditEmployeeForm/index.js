import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setEmployees,
         setErrors,
         setShowErrors } from "../../redux/slices/employeeSlice";
import "../../assets/styles/styles.css";
import FormField from "../../components/CreateEmployee/FormFields";
import Header from "../../components/Header";
import SaveButton from "../../components/CreateEmployee/SaveButton";
import { validateEmployeeForm } from "../../utils/fieldValidation";

/**
 * EditEmployeeForm component for editing employee data.
 *
 * @returns {JSX.Element} The EditEmployeeForm component.
 */
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
  const errors = useSelector((state) => state.employee.errors);
  const showErrors = useSelector((state) => state.employee.showErrors);

  // useEffect to initialize the form data based on location state or default
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

   /**
   * Handle input change event for form fields.
   * Updates the employeeData state with the new input values.
   *
   * @param {Object} e - The event object.
   */
   const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({
      ...employeeData,
      [name]: value,
    });
    
    // Clear errors for the field when the user starts editing it
    dispatch(setErrors({ ...errors, [name]: "" }));
  };

   /**
   * Handle form submission event.
   * Clones the selected employee's data with updated information,
   * updates the employee data in the Redux store, and navigates to the view-employees page.
   *
   * @param {Object} e - The event object.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateEmployeeForm(employeeData); // Use employeeData for validation
    dispatch(setErrors(formErrors)); // Update errors in Redux
  
    if (Object.values(formErrors).some((error) => error !== "")) {
      dispatch(setShowErrors(true)); // Display errors
      return;
    }
    dispatch(setShowErrors(false));

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
              error={errors.firstName}
              showError={showErrors}
            />
            <FormField
              label="Last Name"
              type="text"
              name="lastName"
              id="lastName"
              value={employeeData.lastName}
              onChange={handleInputChange}
              error={errors.lastName}
              showError={showErrors}
            />
            <FormField
              label="Date of Birth"
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              value={employeeData.dateOfBirth}
              onChange={handleInputChange}
              error={errors.dateOfBirth}
              showError={showErrors}
            />
            <FormField
              label="Start Date"
              type="date"
              name="startDate"
              id="startDate"
              value={employeeData.startDate}
              onChange={handleInputChange}
              error={errors.startDate}
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
              error={errors.street}
              showError={showErrors}
            />
            <FormField
              label="City"
              type="text"
              name="city"
              id="city"
              value={employeeData.city}
              onChange={handleInputChange}
              error={errors.city}
              showError={showErrors}
            />
            <FormField
              type="stateSelect"
              name="state"
              id="state"
              value={employeeData.state}
              onChange={handleInputChange}
              error={errors.state}
              showError={showErrors}
            />
            <FormField
              label="Zip Code"
              type="text"
              name="zipCode"
              id="zipCode"
              value={employeeData.zipCode}
              onChange={handleInputChange}
              error={errors.zipCode}
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
              error={errors.department}
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
