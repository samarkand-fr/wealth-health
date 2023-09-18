
import React from "react";
import NavBar from "../../components/Header";
import NavButtons from "../../components/NavButtons";
import TableBody from "../../components/EmployeeTable/TableBody";

function ViewEmployees() {
  return (
    <div>
      <NavBar />
      <NavButtons activePage="viewEmployees" />
      <TableBody />
    </div>
  );
}

export default ViewEmployees;
