import React from "react";
import meImg from "../../images/people/main-2.png";

const AboutMe = () => {
  return (
    <div className="my-5">
      <img src={meImg} width="200" className="d-block mx-auto mb-3" alt="" />
      <h1 className="text-center">
        Hello , I'm <span className="text-primary">Md Shahar Shitol</span>
      </h1>
      <p className="text-center col-10 col-md-8 col-lg-6 mx-auto my-4 text-uppercase">
        i'm a university student. I want to become a professional MERN stack
        developer in few years. My primary goal is to become a web developer and
        get hired in months for which i'm already learning and fully dedicated
        to it. I learn 10 hours per day to achive my goal and i'm confident of
        my strategy and in sha allah i'll get what i want soon.
      </p>
    </div>
  );
};

export default AboutMe;
