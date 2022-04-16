import React from "react";
import { Link, useParams } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { productid } = useParams();
  return (
    <div className="product-details-container">
      <div className="d-flex flex-column justify-content-center">
        <h1>hello products details{productid}</h1>
        <Link to="/checkout">
          <button>Proceed to checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
