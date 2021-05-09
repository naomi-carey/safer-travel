import React, { useState } from "react";
import "./Navbar.css";

const Navbar = (props) => {
  const [navLinkOpen, navLinkToggle] = useState(false);

  const handleNavLinksToggle = () => {
    navLinkToggle(!navLinkOpen);
  };

  const renderClasses = () => {
    let classes = "NavbarLinks active";

    if (!navLinkOpen) {
      classes = "NavbarLinks";
    }
    return classes;
  };

  return (
    <nav className="Navbar">
      <div>
        <img className="NavbarLogo" src="images/logo.png" alt="NavbarLogo" />
      </div>
      <div className="navbar-collapse-menu">
        <ul className={renderClasses()}>
          <li className="link">
            <a onClick={props.showHome}>Home</a>
          </li>
          <li className="link">
            <a onClick={props.showStatistics}>Statistics</a>
          </li>
          <li className="link">
            <a onClick={props.showTravel}>Travel</a>
          </li>
          <li className="link">
            <a onClick={props.showAttractions}>Attractions</a>
          </li>
        </ul>
      </div>
      <div onClick={handleNavLinksToggle} className="hamburger-toggle">
        <i className="fas fa-bars fa-lg"></i>
      </div>
    </nav>
  );
};

export default Navbar;
