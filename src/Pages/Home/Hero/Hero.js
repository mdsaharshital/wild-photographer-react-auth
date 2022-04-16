import React from "react";
import "./Hero.css";

import Header from "../../shared/Header/Header";

const Hero = () => {
  return (
    <div>
      <Header />
      <div className="heroSection">
        <div className="d-flex flex-column justify-content-center align-items-center h-100">
          <div className="">
            <h1 className="text-white main-title">Wild Photography</h1>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
