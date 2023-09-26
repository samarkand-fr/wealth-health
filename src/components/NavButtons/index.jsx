import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../assets/styles/styles.css"; 

/**
 * NavButtons component for displaying navigation buttons.
 *
 * @param {object} props - The component's properties.
 * @param {string} props.activePage - The currently active page.
 * @returns {JSX.Element} The NavButtons component.
 */
function NavButtons({ activePage }) {
  return (
    <nav className="nav-container">
      <div className="nav-buttons-container">
        <Link to="/" className="nav-button-link">
          <button
            className={`nav-button ${
              activePage === "createEmployee" ? "active-nav-button" : ""
            }`}
          >
            Create Employee
          </button>
        </Link>
        <Link to="/view-employees" className="nav-button-link">
          <button
            className={`nav-button ${
              activePage === "viewEmployees" ? "active-nav-button" : ""
            }`}
          >
            Current Employees
          </button>
        </Link>
      </div>
    </nav>
  );
}

NavButtons.propTypes = {
  activePage: PropTypes.oneOf(["createEmployee", "viewEmployees"]).isRequired,
};

export default NavButtons;
