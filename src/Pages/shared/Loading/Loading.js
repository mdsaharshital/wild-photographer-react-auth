import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div
      className="d-flex justify-content-center align-item-center"
      style={{ height: "400px" }}
    >
      <Spinner animation="grow" variant="dark" />
    </div>
  );
};

export default Loading;
