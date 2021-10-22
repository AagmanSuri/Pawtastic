import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
//import DogBanner from "../../assets/dogBanner.svg";
// import Header from "../../components/Header/Header";
const Home = () => {
  return (
    <section className="right">
      <div className="center">
        <h1>we care for</h1>
        <h1>your furry little </h1>
        <h1>loved ones </h1>
        <h1>while </h1>
        <h1>you’re away</h1>
      </div>
      <Link to="/Services">
        <button className="btn">Sechule Visit</button>
      </Link>
    </section>
  );
};

export default Home;
