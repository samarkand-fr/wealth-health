import React from "react";

function ErrorHandler({ searchItemNotFound }) {
  return (
    <div className="no-data-container">
      {searchItemNotFound ? (
        <p className="error-message">THere are no matching records to display</p>
      ) : (
        <>
          <p className="no-data-p large">Employee's List is Empty</p>
          <p className="no-data-p">Use Create Employee Button to Add Employees</p>
        </>
      )}
    </div>
  );
}

export default ErrorHandler;
