import React from "react";
import { Link } from "react-router-dom";

const ServiceItem = ({ service }) => {
  const { name, img, price, description } = service;
  return (
    <>
      <div className="col-md-3 mx-auto">
        <div className="card">
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-footer text-center">
            <h6>{name}</h6>
            <p>{price}</p>
            <p>
              <small>{description}</small>
            </p>
            <Link to="/">
              <button className="btn btn-outline-secondary">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceItem;
