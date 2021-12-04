import React from "react";
import "./Header.css";
import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="Logo">
        <Link className="NavLinks" to="/">
          <img src={Logo} alt="Logo"></img>
        </Link>
        {""}
        <Link className="NavLinks" to="/">
          <h2>Pawtastic</h2>
        </Link>
      </div>
      <ul id="nav">
        <Link className="NavLinks" to="/About">
          <li>About</li>
        </Link>

        <Link className="NavLinks" to="/Reviews">
          <li>Reviews</li>
        </Link>

        <Link className="NavLinks" to="/Services">
          <li>Services</li>
        </Link>

        <Link className="NavLinks" to="/Signup">
          <li>Signup</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
