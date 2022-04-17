import React from "react";
import man404 from "../../../images/404man.jpg";

const NotFound = () => {
  return (
    <div>
      <h3 className="text-center text-danger my-4">404!</h3>
      <img src={man404} className="mx-auto d-block img-fluid mb-4" alt="" />
    </div>
  );
};

export default NotFound;
