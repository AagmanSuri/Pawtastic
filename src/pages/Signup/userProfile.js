import React from "react";
import "./signup.css";
import BackGroundCat1 from "../../assets/backgroundCat1.svg";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
// import { createUserProfile } from "../../store/reducers/userProfileSlice";
// import { Formik } from "formik";
const UserProfile = () => {
  const history = useHistory();
  //   const dispatch = useDispatch();

  const { userProfile } = useSelector((state) => state.userProfile);

  return (
    <div className="wrapper wrapper-sign">
      <img className="back-pic" src={BackGroundCat1} alt="back"></img>
      <div style={{ textAlign: "center", marginTop: "5rem" }}>
        <div
          style={{ marginTop: "-2rem", marginLeft: "-15rem" }}
          className="Logo"
        >
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
        <h1 style={{ color: "white" }}>Why our service?</h1>
        <p style={{ color: "white", fontSize: "20px", marginRight: "2rem" }}>
          <br></br>
          We’re animal lovers backed by insurance and experience<br></br>{" "}
          Powered by tech, so you can book and pay from our app <br></br>{" "}
          Updates and pics for every visit keep you in the loop
        </p>
      </div>
      <div
        className="box2"
        style={{
          backgroundColor: "#F7ECEB"
        }}
      >
        <div
          style={{
            marginLeft: "2rem",
            marginTop: "16rem"
          }}
        >
          <h1>
            Good news! We care for pets in Winter Park. Let’s create your
            account.
          </h1>
          <h2>User Details : </h2>
          <div
            style={{
              backgroundColor: "white",
              height: "350px",
              width: "800px",
              textAlign: "center"
            }}
          >
            <br></br>
            <h1>{userProfile.FirstName}</h1>
            <h2>{userProfile.name}</h2>
            <text>{userProfile.breed}</text>
            <br></br>
            <br></br>
            {/* <hr></hr>s */}
            <label>Gender:</label>
            <text>{userProfile.Gender}</text>
            <br></br>
            <br></br>
            <label>Weight:</label>
            <text>{userProfile.weight} Kgs</text>
            <br></br>
            <br></br>
            <Link to="../">
              <button
                className="btn"
                style={{ background: "#545871", color: "white" }}
                // type="submit"
              >
                Create Profile
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
