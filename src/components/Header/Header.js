import React from "react";
import "./Header.css";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="Logo">
        <Link className="NavLinks" to="/">
          <img src={Logo} alt="Logo"></img>
        </Link>
        {""}
        <h4>Pawtastic</h4>
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
