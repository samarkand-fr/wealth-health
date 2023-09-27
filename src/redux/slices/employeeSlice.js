import { createSlice } from "@reduxjs/toolkit";

// Create a Redux slice for managing employee-related state
const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    // Initial state with employee, employees array, and error-related fields
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
    employees: JSON.parse(localStorage.getItem("employees")) || [], // Initialize employees from local storage or an empty array
    errors: {}, // Initialize errors as an empty object
    showErrors: false, // Initialize showErrors as false
  },
  reducers: {
    // Reducer for setting the current employee
    setEmployee: (state, action) => {
      state.employee = action.payload;
    },
    // Reducer for setting the employees array and updating local storage
    setEmployees: (state, action) => {
      state.employees = action.payload;
      // Save the updated employees to local storage
      localStorage.setItem("employees", JSON.stringify(action.payload));
    },
    // Reducer for setting validation errors
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    // Reducer for controlling whether to show errors
    setShowErrors: (state, action) => {
      state.showErrors = action.payload;
    },
    // Reducer for adding a new employee to the employees array and updating local storage
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
      // Save the updated employees to local storage
      localStorage.setItem("employees", JSON.stringify(state.employees));
    },
    // Reducer for updating an existing employee in the employees array and updating local storage
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
    // Reducer for resetting the current employee
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

// Export the action creators and reducer
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
