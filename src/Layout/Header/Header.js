import React from "react";
import "./Header.css";
//assets
import Logo from "../../Assets/Images/Logo.png";
function Header() {
  return (
    <div className="header">
      <img className="logo" src={Logo} alt="" />
      <ul className="navbar">
        <li>
          <a href=".." className="nav-items">
            About
          </a>
        </li>
        <li>
          <a href=".." className="nav-items">
            Attributes
          </a>
        </li>
        <li>
          <a href=".." className="nav-items">
            Specs
          </a>
        </li>
        <li>
          <a href=".." className="nav-items">
            Team
          </a>
        </li>
        <li>
          <a href=".." className="nav-items">
            FAQ
          </a>
        </li>
      </ul>
      <div className="header_social">
        <i className=".header_icon fab fa-discord"></i>
        <i className=".header_icon fab fa-twitter"></i>
      </div>
    </div>
  );
}

export default Header;
