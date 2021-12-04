import React from "react";
import Review from "../../components/Reviews/index";
const Reviews = () => {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h1 style={{ fontSize: "40px", color: "white" }}>
            Pets & their humans love us
          </h1>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
};

export default Reviews;
