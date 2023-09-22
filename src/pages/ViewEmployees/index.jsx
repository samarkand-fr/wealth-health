import React from "react";
import Header from "../../components/Header";
import NavButtons from "../../components/NavButtons";
import TableBody from "../../components/CurrentEmployees/TableBody";

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
