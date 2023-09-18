// import { createSlice } from '@reduxjs/toolkit';

// const employeeSlice = createSlice({
//   name: 'employee',
//   initialState: {
//     employee: {
//       firstName: '',
//       lastName: '',
//       dateOfBirth: '',
//       startDate: '',
//       department: '',
//       street: '',
//       city: '',
//       state: '',
//       zipCode: '',
//     },
//     employees: JSON.parse(localStorage.getItem('employees')) || [],
//     errors: {},
//     showErrors: false,
//   },
//   reducers: {
//     setEmployee: (state, action) => {
//       state.employee = action.payload;
//     },
//     setEmployees: (state, action) => {
//       state.employees = action.payload;
//       // Save the updated employees to local storage
//       localStorage.setItem('employees', JSON.stringify(action.payload));
//     },
//     setErrors: (state, action) => {
//       state.errors = action.payload;
//     },
//     setShowErrors: (state, action) => {
//       state.showErrors = action.payload;
//     },
//     addEmployee: (state, action) => {
//       state.employees.push(action.payload);
//       // Save the updated employees to local storage
//       localStorage.setItem('employees', JSON.stringify(state.employees));
//     },
//     resetEmployee: (state, action) => {
//       state.employee = {
//         firstName: '',
//         lastName: '',
//         dateOfBirth: '',
//         startDate: '',
//         department: '',
//         street: '',
//         city: '',
//         state: '',
//         zipCode: '',
//       };
//     },
//   },
// });

// export const {
//   setEmployee,
//   setEmployees, 
//   setErrors,
//   setShowErrors,
//   addEmployee,
//   resetEmployee,
// } = employeeSlice.actions;

// export default employeeSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    employee: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      startDate: "",
      department: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
    },
    employees: JSON.parse(localStorage.getItem("employees")) || [],
    errors: {},
    showErrors: false,
  },
  reducers: {
    setEmployee: (state, action) => {
      state.employee = action.payload;
    },
    setEmployees: (state, action) => {
      state.employees = action.payload;
      // Save the updated employees to local storage
      localStorage.setItem("employees", JSON.stringify(action.payload));
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    setShowErrors: (state, action) => {
      state.showErrors = action.payload;
    },
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
      // Save the updated employees to local storage
      localStorage.setItem("employees", JSON.stringify(state.employees));
    },
    updateEmployee: (state, action) => {
      const updatedEmployee = action.payload;
      // Find and update the employee by name or another unique identifier
      const index = state.employees.findIndex(
        (employee) => employee.name === updatedEmployee.name
      );
      if (index !== -1) {
        state.employees[index] = updatedEmployee;
        // Save the updated employees to local storage
        localStorage.setItem("employees", JSON.stringify(state.employees));
      }
    },
    resetEmployee: (state, action) => {
      state.employee = {
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        startDate: "",
        department: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
      };
    },
  },
});

export const {
  setEmployee,
  setEmployees,
  setErrors,
  setShowErrors,
  addEmployee,
  updateEmployee, // Add the updateEmployee action
  resetEmployee,
} = employeeSlice.actions;

export default employeeSlice.reducer;
