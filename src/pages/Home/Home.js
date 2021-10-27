import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
//import DogBanner from "../../assets/dogBanner.svg";
// import Header from "../../components/Header/Header";
const Home = () => {
  return (
    <section>
      <div className="right center">
        <h1>we care for</h1>
        <h1>your furry little </h1>
        <h1>loved ones </h1>
        <h1>while </h1>
        <h1>you’re away</h1>
        <Link to="/Services">
          <button className="btn">Sechule Visit</button>
        </Link>
      </div>
      <div>
        <h2>Expert care for your furry, feathery, or scaley friend</h2>
        <p>
          We know how stressful it is to leave your pets at home alone. We’re a
          team of experienced animal caregivers, well connected to local
          veterinarians. Trust to us to love them like our own, and to keep them
          safe and happy till you’re home.
        </p>
      </div>
    </section>
  );
};

export default Home;
