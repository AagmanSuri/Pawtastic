import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <ul id="navLinks">
        <div>
          <Link to="/">
            <li>About</li>
          </Link>
        </div>
        <div>
          <Link to="/Reviews">
            <li>Reviews</li>
          </Link>
        </div>
        <div>
          <Link to="/Services">
            <li>Services</li>
          </Link>
        </div>
        <div>
          <Link to="/Signup">
            <li>Signup</li>
          </Link>
        </div>
      </ul>
    </>
  );
};

export default Header;
