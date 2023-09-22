import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './slices/employeeSlice'; // Import slice

const store = configureStore({
  reducer: {
    employee: employeeReducer, // Add slice reducer
   
  },
});

export default store;
