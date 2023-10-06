import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeForm from "./pages/EmployeeForm";
import ViewEmployees from "./pages/ViewEmployees";
import NotFoundPage from "./pages/NotFoundPage";
import EditEmployeeForm from "./pages/EditEmployeeForm";
import "../src/assets/styles/styles.css"; 
import { Provider } from 'react-redux';
import store from './redux/store'; 

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<EmployeeForm />} />
          <Route path="/view-employees" element={<ViewEmployees showLabel={true} />} />
          <Route path="/edit-employee/:name" element={<EditEmployeeForm />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
