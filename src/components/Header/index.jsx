import React from "react";
import "../../assets/styles/styles.css"; 

/**
 * Header component for displaying the site's header with the logo.
 *
 * @returns {JSX.Element} The Header component.
 */
function Header() {
  return (
    <nav className="navbar" data-testid="navbar" aria-label="Wealth Health">
      <div className="logo">
        <div className="logo-image" />
        <h1>Wealth Health-HRnet</h1>
      </div>
    </nav>
  );
}

export default Header;
