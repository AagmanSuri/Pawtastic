import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import DogBanner from "../../assets/dogBanner.svg";
import cat from "../../assets/cat.svg";
import dog from "../../assets/dog.svg";
import rabbit from "../../assets/rabbit.svg";
import parrot from "../../assets/parrot.svg";
import blackCat from "../../assets/blackcat.svg";
import twoDog from "../../assets/twoDog.svg";

// import Header from "../../components/Header/Header";
const Home = () => {
  return (
    <>
      <section className="back">
        <img src={DogBanner} alt="Logo"></img>
      </section>
      <section className="front">
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
      </section>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <section>
        <div className="wrapper">
          <div className="block">
            <h2>Expert care for your furry, feathery, or scaley friend</h2>
            <p>
              We know how stressful it is to leave your pets at home alone.
              We’re a team of experienced animal caregivers, well connected to
              local veterinarians. Trust to us to love them like our own, and to
              keep them safe and happy till you’re home.
            </p>
          </div>

          <div>
            <img
              style={{ height: "200px", width: "200px" }}
              alt="dog"
              src={parrot}
            ></img>{" "}
            <img
              style={{ height: "200px", width: "200px" }}
              alt="dog"
              src={cat}
            ></img>{" "}
            <img
              style={{ height: "200px", width: "200px" }}
              alt="dog"
              src={dog}
            ></img>
            <img
              style={{ height: "200px", width: "200px" }}
              alt="dog"
              src={rabbit}
            ></img>{" "}
            <img
              style={{ height: "200px", width: "200px" }}
              alt="dog"
              src={blackCat}
            ></img>{" "}
            <img
              style={{ height: "200px", width: "200px" }}
              alt="dog"
              src={twoDog}
            ></img>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
