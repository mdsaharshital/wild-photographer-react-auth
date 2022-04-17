import React from "react";

const TestimonyCard = ({ testimony }) => {
  const { img, name, desc } = testimony;
  return (
    <>
      <div className="col-12 col-md-6 col-lg-4  mx-auto">
        <div className="mx-auto all-cards" style={{ width: "320px" }}>
          <img
            src={img}
            width="60"
            height="60"
            className="rounded-circle mx-auto d-block"
            alt=""
          />
          <div className="mt-3">
            <h3 className="text-center fw-bolder">{name}</h3>
            <p className="text-center">
              <small>{desc}</small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonyCard;
