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
      desc: "Most awesome photographer i've ever seen. Wishing his success.",
    },
    {
      id: 2,
      img: willSmith,
      name: "Will Smith",
      desc: "Awesome Photographer with high potntial and great vision",
    },
    {
      id: 3,
      img: chrisRock,
      name: "Chris Rock",
      desc: "He is a will smith of Photography world. I just love his works",
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
