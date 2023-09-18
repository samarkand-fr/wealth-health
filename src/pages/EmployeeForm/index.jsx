
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setEmployee,
  setErrors,
  setShowErrors,
  addEmployee,
  resetEmployee,
} from "../../redux/slices/employeeSlice"; // Import your Redux actions and selectors

import { validateEmployeeForm } from "../../utils/FormValidation/validateEmployeeForm";

import FormField from "../../components/CreateEmployee/FormFields";
import Header from "../../components/Header";
import NavButtons from "../../components/NavButtons";
import SaveButton from "../../components/CreateEmployee/SaveButton";
import { Modal, useModal } from "@jadina/modal-plugin";
import "../../assets/styles/styles.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";

function EmployeeForm() {
  const employee = useSelector((state) => state.employee.employee);
  const errors = useSelector((state) => state.employee.errors);
  const showErrors = useSelector((state) => state.employee.showErrors);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate

  const { showModal, activeModal, handleOpenModal, handleCloseModal } =
    useModal();

  
    const [debouncedEmployee, setDebouncedEmployee] = useState(employee);

    useEffect(() => {
      const timer = setTimeout(() => {
        setDebouncedEmployee(employee);
      }, 300); // Adjust the debounce delay as needed (e.g., 300 milliseconds)
  
      return () => {
        clearTimeout(timer);
      };
    }, [employee]);
  
    useEffect(() => {
      const newErrors = validateEmployeeForm(debouncedEmployee);
      dispatch(setErrors(newErrors));
    }, [debouncedEmployee, dispatch]);
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(setEmployee({ ...employee, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateEmployeeForm(employee);
    dispatch(setErrors(formErrors));

    if (Object.values(formErrors).some((error) => error !== "")) {
      dispatch(setShowErrors(true));
      return;
    }

    dispatch(addEmployee(employee));
    dispatch(resetEmployee());
    dispatch(setShowErrors(false));
    handleOpenModal("customContent");
    
  };

  const handleModalClose = () => {
    handleCloseModal(); 
    navigate("/view-employees");
  };

  return (
    <section>
      <Header />
      <NavButtons activePage="createEmployee" />
      <form onSubmit={handleSubmit}>
        <div className="form-content">
        <div className="identity-content">
            <FormField
              label="First Name"
              type="text"
              name="firstName"
              id="firstName"
              value={employee.firstName}
              onChange={handleChange}
              error={errors.firstName}
              showError={showErrors}
              autoFocus
            />
            <FormField
              label="Last Name"
              type="text"
              name="lastName"
              id="lastName"
              value={employee.lastName}
              onChange={handleChange}
              error={errors.lastName}
              showError={showErrors}
            />
            <FormField
              label="Date of Birth"
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              value={employee.dateOfBirth}
              onChange={handleChange}
              error={errors.dateOfBirth}
              showError={showErrors}
            />
            <FormField
              label="Start Date"
              type="date"
              name="startDate"
              id="startDate"
              value={employee.startDate}
              onChange={handleChange}
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
              value={employee.street}
              onChange={handleChange}
              error={errors.street}
              showError={showErrors}
            />
            <FormField
              label="City"
              type="text"
              name="city"
              id="city"
              value={employee.city}
              onChange={handleChange}
              error={errors.city}
              showError={showErrors}
            />
            <FormField
              label="State"
              type="stateSelect"
              name="state"
              id="state"
              value={employee.state}
              onChange={handleChange}
              error={errors.state}
              showError={showErrors}
            />
            <FormField
              label="Zip code"
              type="text"
              name="zipCode"
              id="zipCode"
              value={employee.zipCode}
              onChange={handleChange}
              error={errors.zipCode}
              showError={showErrors}
            />
          </div>
        
        </div>
        <div className="department-container">
        <div className="department-container-label">
            <FormField
              labelComponent="Department"
              label="Département"
              type="departmentSelect"
              name="department"
              id="department"
              value={employee.department}
              onChange={handleChange}
              showError={showErrors}
              error={errors.department}
            />
          </div>
        </div>
        <SaveButton onClick={handleSubmit} />
        <Modal
          isOpen={showModal && activeModal === "customContent"}
          close={handleModalClose}
          addCloseIcon={true}
          onButtonClick={handleModalClose}
        >
          <div className="custom-modal-content">
            <img  alt=""/>
            <h2>Employee's data have been successfully stored!</h2>
          </div>
        </Modal>
      </form>
    </section>
  );
}

export default EmployeeForm;
// EmployeeForm.js
// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   setEmployee,
//   setErrors,
//   setShowErrors,
//   addEmployee,
//   resetEmployee,
// } from "../../redux/slices/employeeSlice";
// import { validateEmployeeForm } from "../../utils/FormValidation/validateEmployeeForm";
// import FormField from "../../components/CreateEmployee/FormFields";
// import Header from "../../components/Header";
// import NavButtons from "../../components/NavButtons";
// import SaveButton from "../../components/CreateEmployee/SaveButton";
// import { Modal, useModal } from "@jadina/modal-plugin";
// import { useNavigate } from "react-router-dom";

// import "../../assets/styles/styles.css";

// function EmployeeForm() {
//   const employee = useSelector((state) => state.employee.employee);
//   const errors = useSelector((state) => state.employee.errors);
//   const showErrors = useSelector((state) => state.employee.showErrors);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { showModal, activeModal, handleOpenModal, handleCloseModal } = useModal();
  
//   const [debouncedEmployee, setDebouncedEmployee] = useState(employee);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setDebouncedEmployee(employee);
//     }, 300);
  
//     return () => {
//       clearTimeout(timer);
//     };
//   }, [employee]);
  
//   useEffect(() => {
//     const newErrors = validateEmployeeForm(debouncedEmployee);
//     dispatch(setErrors(newErrors));
//   }, [debouncedEmployee, dispatch]);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     dispatch(setEmployee({ ...employee, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const formErrors = validateEmployeeForm(employee);
//     dispatch(setErrors(formErrors));

//     if (Object.values(formErrors).some((error) => error !== "")) {
//       dispatch(setShowErrors(true));
//       return;
//     }

//     dispatch(addEmployee(employee));
//     dispatch(resetEmployee());
//     dispatch(setShowErrors(false));
//     handleOpenModal("customContent");
//   };

//   const handleModalClose = () => {
//     handleCloseModal(); 
//     navigate("/view-employees");
//   };

//   return (
//     <section>
//       <Header />
//       <NavButtons activePage="createEmployee" />
//       <form onSubmit={handleSubmit}>
//         <div className="form-content">
//           <div className="identity-content">
//             <FormField
//               label="First Name"
//               type="text"
//               name="firstName"
//               id="firstName"
//               value={employee.firstName}
//               onChange={handleChange}
//               error={errors.firstName}
//               showError={showErrors}
//               autoFocus
//             />
//             <FormField
//               label="Last Name"
//               type="text"
//               name="lastName"
//               id="lastName"
//               value={employee.lastName}
//               onChange={handleChange}
//               error={errors.lastName}
//               showError={showErrors}
//             />
//             <FormField
//               label="Date of Birth"
//               type="date"
//               name="dateOfBirth"
//               id="dateOfBirth"
//               value={employee.dateOfBirth}
//               onChange={handleChange}
//               error={errors.dateOfBirth}
//               showError={showErrors}
//             />
//             <FormField
//               label="Start Date"
//               type="date"
//               name="startDate"
//               id="startDate"
//               value={employee.startDate}
//               onChange={handleChange}
//               error={errors.startDate}
//               showError={showErrors}
//             />
//           </div>
//           <div className="address-content">
//             <FormField
//               label="Street"
//               type="text"
//               name="street"
//               id="street"
//               value={employee.street}
//               onChange={handleChange}
//               error={errors.street}
//               showError={showErrors}
//             />
//             <FormField
//               label="City"
//               type="text"
//               name="city"
//               id="city"
//               value={employee.city}
//               onChange={handleChange}
//               error={errors.city}
//               showError={showErrors}
//             />
//             <FormField
//               label="State"
//               type="stateSelect"
//               name="state"
//               id="state"
//               value={employee.state}
//               onChange={handleChange}
//               error={errors.state}
//               showError={showErrors}
//             />
//             <FormField
//               label="Zip code"
//               type="text"
//               name="zipCode"
//               id="zipCode"
//               value={employee.zipCode}
//               onChange={handleChange}
//               error={errors.zipCode}
//               showError={showErrors}
//             />
//           </div>
//         </div>
//         <div className="department-container">
//           <div className="department-container-label">
//             <FormField
//               labelComponent="Department"
//               label="Département"
//               type="departmentSelect"
//               name="department"
//               id="department"
//               value={employee.department}
//               onChange={handleChange}
//               showError={showErrors}
//               error={errors.department}
//             />
//           </div>
//         </div>
//         <SaveButton onClick={handleSubmit} />
//         <Modal
//           isOpen={showModal && activeModal === "customContent"}
//           close={handleModalClose}
//           addCloseIcon={true}
//           onButtonClick={handleModalClose}
//         >
//           <div className="custom-modal-content">
//             <img alt="" />
//             <h2>Employee's data have been successfully stored!</h2>
//           </div>
//         </Modal>
//       </form>
//     </section>
//   );
// }

// export default EmployeeForm;
