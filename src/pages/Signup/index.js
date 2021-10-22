import React, { useState } from "react";
import { Link } from "react-router-dom";
const Signup = () => {
  const [zipCode, setZipCode] = useState(0);
  const [process, setProcess] = useState(false);
  const checkHandeler = () => {
    console.log(Number(zipCode));

    if (Number(zipCode) > 180000 && Number(zipCode) < 190000) {
      setProcess(true);
    }
  };
  return (
    <div>
      <h2>Signup</h2>
      <label htmlFor="zipCode">Zip Code : </label>
      <input
        type="number"
        id="zipCode"
        // value={zipCode}
        placeholder="Enter the zipCode"
        onChange={(event) => {
          setZipCode(event.target.value);
        }}
      ></input>
      <button onClick={checkHandeler}>Check</button>
      {process && (
        <Link to="/Signup/register">
          <button>Next</button>
        </Link>
      )}
    </div>
  );
};

export default Signup;
