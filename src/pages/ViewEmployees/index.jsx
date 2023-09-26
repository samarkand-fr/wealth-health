import React from "react";
import Header from "../../components/Header";
import NavButtons from "../../components/NavButtons";
import TableBody from "../../components/CurrentEmployees/TableBody";

/**
 * ViewEmployees component for displaying the view of current employees.
 *
 * @returns {JSX.Element} The ViewEmployees component.
 */
function ViewEmployees() {
  return (
    <div>
      <Header />
      <NavButtons activePage="viewEmployees" />
      <TableBody />
    </div>
  );
}

export default ViewEmployees;
