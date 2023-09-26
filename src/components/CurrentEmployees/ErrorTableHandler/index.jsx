import React from "react";

/**
 * ErrorHandler component for displaying error messages on search  or no-data messages.
 *
 * @param {object} props - The component's properties.
 * @param {boolean} props.searchItemNotFound - Indicates whether a search item was not found.
 * @returns {JSX.Element} The ErrorHandler component.
 */
function ErrorHandler({ searchItemNotFound }) {
  return (
    <div className="no-data-container">
      {searchItemNotFound ? (
        <p className="error-message">There are no matching records to display</p>
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
