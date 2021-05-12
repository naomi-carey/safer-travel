import React, { useState } from "react";
import "./Navbar.css";

const Navbar = (props) => {
  // const [navLinkOpen, navLinkToggle] = useState(false);

  // const handleNavLinksToggle = () => {
  //   navLinkToggle(!navLinkOpen);
  // };

  const [isNavLinkOpen, setIsNavLinkOpen] = useState(false);

  const handleNavLinksToggle = () => {
    let closed = !isNavLinkOpen;
    setIsNavLinkOpen(closed);
  };

  const renderClasses = () => {
    let classes = "NavbarLinks active";

    if (!isNavLinkOpen) {
      classes = "NavbarLinks";
    }
    return classes;
  };

  return (
    <nav onClick={handleNavLinksToggle} className="Navbar">
      <div>
        <img
          className="NavbarLogo"
          src="images/logo.png"
          alt="NavbarLogo"
          to="/"
          onClick={props.showHome}
        />
      </div>
      <div className="navbar-collapse-menu">
        <ul className={renderClasses()}>
          <li className="link">
            <a href="/#" onClick={props.showHome}>
              Home
            </a>
          </li>
          <li className="link">
            <a href="/#" onClick={props.showStatistics}>
              Statistics
            </a>
          </li>
          <li className="link">
            <a href="/#" onClick={props.showTravel}>
              Travel
            </a>
          </li>
          <li className="link">
            <a href="/#" onClick={props.showAttractions}>
              Attractions
            </a>
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
