import React from "react";
import "../../assets/styles/styles.css"; // Import the CSS file

function Header() {
  return (
    <nav className="navbar" data-testid="navbar" aria-label="Wealth Health">
      <div className="logo">
        <div className="logo-image" />
        <h1>Wealth Health</h1>
      </div>
    </nav>
  );
}
export default Header;
