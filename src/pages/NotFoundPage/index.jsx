import React from "react";
import NavBar from "../../components/Header";
import { NavLink } from "react-router-dom";
import "../../assets/styles/styles.css"; // Import the CSS file

/**
 * NotFoundPage component for displaying a "Page Not Found" message.
 *
 * @returns {JSX.Element} The NotFoundPage component.
 */
const NotFoundPage = () => {
  return (
    <div className="container-error">
      <div className="center-page">
        <NavBar />
        <h1 className="title-text">
          {`Sorry ...... No Such Page`}
        </h1>
        <NavLink to="/" className="return-page">
          Back to Home Page
        </NavLink>
      </div>
    </div>
  );
};

export default NotFoundPage;
