import React from "react";
import PropTypes from "prop-types";
import { Modal } from "@jadina/modal-plugin";
import { useNavigate } from "react-router-dom";

/**
 * EmployeeDetailsModal component for displaying employee details in a modal.
 *
 * @param {object} props - The component's properties.
 * @param {boolean} props.isOpen - Determines whether the modal is open or closed.
 * @param {function} props.onClose - The function to close the modal.
 * @param {object} props.employee - The employee data to display in the modal.
 * @param {boolean} props.isDataMocked - Indicates whether the data is mocked.
 * @param {function} props.onDelete - The function to handle the "Delete" button click.
 * @returns {JSX.Element|null} The EmployeeDetailsModal component.
 */
const EmployeeDetailsModal = ({
  isOpen,
  onClose,
  employee,
  isDataMocked,
  onDelete, 
}) => {
  const navigate = useNavigate();

  const handleEditButtonClick = () => {
    if (employee && !isDataMocked) {
      navigate(`/edit-employee/${employee.firstName}-${employee.lastName}`, {
        state: { employeeData: employee },
      });
    }
  };

  if (!employee) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} close={onClose}>
      {isOpen && ( // conditional rendering
        <div className="modal-content">
          <div className="modal-details">
            <h2 className="styled-h2">Employee Details</h2>
            {employee && (
              <>
                <p>Name: {employee.firstName} {employee.lastName}</p>
                <p>Start Date: {employee.startDate}</p>
                <p>Department: {employee.department}</p>
                <p>Date of Birth: {employee.dateOfBirth}</p>
                <p>
                  Address: {employee.street}, {employee.city}, {employee.state}{" "}
                  {employee.zipCode}
                </p>
              </>
            )}
          </div>
          <div className="modal-actions">
            {!isDataMocked && (// conditional rendering
              <>
                <button onClick={handleEditButtonClick}>Edit</button>
                <button onClick={() => onDelete(employee)}>Delete</button>
              </>
            )}
          </div>
        </div>
      )}
    </Modal>
  );
};
EmployeeDetailsModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  employee: PropTypes.shape({}),
  isDataMocked: PropTypes.bool,
  onDelete: PropTypes.func.isRequired, 
};

EmployeeDetailsModal.defaultProps = {
  isOpen: false,
  employee: null,
  isDataMocked: false,
};

export default EmployeeDetailsModal;
