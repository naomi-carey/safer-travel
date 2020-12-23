import React, { useState } from "react";
import "./Navbar.css";

const Navbar = (props) => {
  console.log(props);
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
        <img
          className="NavbarLogo"
          src="https://safetravel.id/img/ico.jpg"
          alt="S with plane logo"
        />
      </div>
      <div>
        <ul className={renderClasses()}>
          <li className="link">
            <a href="@">Home</a>
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
