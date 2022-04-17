import React from "react";
import Hero from "../Hero/Hero";
import LatestWork from "../LatestWork/LatestWork";
import Testimony from "../Testimony/Testimony";

const Home = () => {
  return (
    <div className="h-100">
      <Hero />
      <LatestWork />
      <Testimony />
    </div>
  );
};

export default Home;
