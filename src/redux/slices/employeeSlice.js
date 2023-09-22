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
      const index = state.employees.findIndex(
        (employee) => employee.name === updatedEmployee.name
      );
    
      if (index !== -1) {
        // Create a new array with the updated employee
        const updatedEmployees = [...state.employees];
        updatedEmployees[index] = updatedEmployee;
    
        // Update the state with the new array
        state.employees = updatedEmployees;
    
        // Save the updated employees to local storage
        localStorage.setItem("employees", JSON.stringify(updatedEmployees));
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
  updateEmployee, 
  resetEmployee,
} = employeeSlice.actions;

export default employeeSlice.reducer;
