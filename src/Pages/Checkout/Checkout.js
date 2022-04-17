import React from "react";
import { Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Checkout = () => {
  const { productid } = useParams();
  return (
    <div className="">
      <div className=" mx-auto my-5">
        <h1 className="text-center mb-2">Checkout product of {productid}</h1>
        <Form className="col-10 col-md-8 col-lg-6 mx-auto">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Purpose of your purchase</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <button className="btn btn-outline-secondary">Checkout</button>
        </Form>
      </div>
    </div>
  );
};

export default Checkout;
