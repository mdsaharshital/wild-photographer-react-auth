import React from "react";
import { Carousel } from "react-bootstrap";
import "./Hero.css";
import caro1 from "../../../images/elephant-2870777_1920.jpg";
import caro2 from "../../../images/elephant-main.jpg";
import caro3 from "../../../images/giraffe-2191662_1920.jpg";

const Hero = () => {
  return (
    <div>
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
