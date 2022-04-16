import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceItem = ({ service }) => {
  const { name, img, price, id, description } = service;
  const navigate = useNavigate();
  const navigateToServiceDetails = () => {
    navigate(`/productdetails/${id}`);
  };
  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-4">
        <div className="card mx-auto" style={{ width: "320px" }}>
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-footer text-center">
            <h6>{name}</h6>
            <p>{price}</p>
            <p>
              <small>{description}</small>
            </p>
            <button
              onClick={() => navigateToServiceDetails()}
              className="btn btn-outline-secondary"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceItem;
