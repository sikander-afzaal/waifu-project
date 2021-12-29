import React, { useState } from "react";
import "./Header.css";
//assets
import Logo from "../../Assets/Images/Logo.png";
function Header() {
  const [open, setOpen] = useState(false);
  const opening = (e) => {
    if (document.querySelector("body").classList.contains("overflow")) {
      document.querySelector("body").classList.remove("overflow");
    } else {
      document.querySelector("body").classList.add("overflow");
    }
    setOpen((prev) => !prev);
  };
  return (
    <div className="header">
      <img className="logo" src={Logo} alt="" />
      <ul className={`navbar ${open ? "open" : ""}`}>
        <li>
          <i onClick={opening} className="mobile fas fa-times"></i>
        </li>
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
      <i onClick={opening} className="mobile fas fa-bars"></i>
      <div className="desktop header_social">
        <i className=".header_icon fab fa-discord"></i>
        <i className=".header_icon fab fa-twitter"></i>
      </div>
    </div>
  );
}

export default Header;
