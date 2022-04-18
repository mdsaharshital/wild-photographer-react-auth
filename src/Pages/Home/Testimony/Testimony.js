import React from "react";
import TestimonyCard from "../TestimonyCard/TestimonyCard";
import "./Testimony.css";
import billGates from "../../../images/people/mrbill.jpg";
import willSmith from "../../../images/people/will-smith.jpg";
import chrisRock from "../../../images/people/Chris_Rock.jpg";

const ProductDetails = () => {
  const testimonies = [
    {
      id: 1,
      img: billGates,
      name: "Bill Gates",
      desc: "He is a wonderful man and truly a professional in his field. I will treasure them forever. I simply cannot recommend him enough!",
    },
    {
      id: 2,
      img: willSmith,
      name: "Will Smith",
      desc: "He is the absolute BEST! I have had the pleasure of working with her twice and would recommend him to anyone. Thank you, thank you, thank you!",
    },
    {
      id: 3,
      img: chrisRock,
      name: "Chris Rock",
      desc: "He creates magic. I would never hesitate to recommend him to anyone who wants a true professional to create a customized photography experience",
    },
  ];
  return (
    <div className="my-5">
      <h1 className="text-center my-5 testi-title">Testimonies</h1>
      <div className="row g-4 mx-auto card-container">
        {testimonies.map((testimony) => (
          <TestimonyCard key={testimony.id} testimony={testimony} />
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
