import React from "react";
import { Link, useParams } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { productid } = useParams();
  return (
    <div className="product-details-container">
      <div className="h-100 d-flex flex-column justify-content-center align-items-center">
        <h1>This is products details{productid}</h1>
        <Link to="/checkout">
          <button className="btn btn-outline-secondary my-3">
            Proceed to checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
