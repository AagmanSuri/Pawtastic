import React from "react";
import "./Header.css";
import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
//import { authSlice } from "../../store/reducers/authSlice";

const Header = () => {
  const { auth } = useSelector((state) => state.auth);
  console.log(auth);
  return (
    <div>
      <div className="Logo">
        <Link className="NavLinks" to="/">
          <img style={{ marginLeft: "1rem" }} src={Logo} alt="Logo"></img>
        </Link>{" "}
        <Link className="NavLinks" to="/">
          {"    "}
          <h2 style={{ marginLeft: "1rem", marginTop: "0.65rem" }}>
            Pawtastic
          </h2>
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

        {auth && (
          <Link className="NavLinks" to="/Profile">
            <li>Profile</li>
          </Link>
        )}
        {!auth && (
          <Link className="NavLinks" to="/Signup">
            <li>Signup</li>
          </Link>
        )}
        {!auth && (
          <Link className="NavLinks" to="/Login">
            <li>Login</li>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default Header;
