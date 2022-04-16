import React from "react";
import "./LatestWork.css";
import lion from "../../../images/lion.jpg";
import zebra from "../../../images/zebra.jpg";
import tiger from "../../../images/tiger.jpg";
import ServiceItem from "../ServiceItem/ServiceItem";

const LatestWork = () => {
  const services = [
    {
      id: 1,
      name: "Kign Lion",
      img: lion,
      price: 1200,
      description: "This is a awesome lion NFT made only for you",
    },
    {
      id: 2,
      name: "Fearless Zebra",
      img: zebra,
      price: 800,
      description: "This is a awesome lion NFT made only for you",
    },
    {
      id: 3,
      name: "Super Tiger",
      img: tiger,
      price: 1000,
      description: "This is a awesome lion NFT made only for you",
    },
  ];
  return (
    <div className="my-5 lastest-container">
      <h3 className="text-center title-text">Buy my photography as NFT</h3>
      <div className="row g-4 mx-auto">
        {services.map((service) => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default LatestWork;
