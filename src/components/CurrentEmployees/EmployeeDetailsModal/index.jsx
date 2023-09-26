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
 * @returns {JSX.Element|null} The EmployeeDetailsModal component.
 */
const EmployeeDetailsModal = ({ isOpen, onClose, employee }) => {
  const navigate = useNavigate();

  /**
   * Handles the "Edit" button click event.
   * Navigates to the edit employee page with employee data.
   */
  const handleEditButtonClick = () => {
    if (employee) {
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
      <div className="modal-content">
        <div className={`modal-details ${isOpen ? "visible" : ""}`}>
          <h2 className="styled-h2">Employee Details</h2>
          <p>
            Name: {employee.firstName} {employee.lastName}
          </p>
          <p>Start Date: {employee.startDate}</p>
          <p>Department: {employee.department}</p>
          <p>Date of Birth: {employee.dateOfBirth}</p>
          <p>
            Address: {employee.street}, {employee.city}, {employee.state}{" "}
            {employee.zipCode}
          </p>
          <p>Department: {employee.department}</p>
        </div>
        <div className="modal-actions">
          <button onClick={handleEditButtonClick}>Edit</button>
        </div>
      </div>
    </Modal>
  );
};

EmployeeDetailsModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  employee: PropTypes.shape({}),
};

EmployeeDetailsModal.defaultProps = {
  isOpen: false,
  employee: null,
};

export default EmployeeDetailsModal;
