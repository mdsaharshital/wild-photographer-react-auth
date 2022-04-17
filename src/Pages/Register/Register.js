import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="my-5">
        <h1 className="text-center">Register now</h1>
        <div className="p-4 mx-auto  col col-md-6">
          <Form>
            <Form.Group className="my-5" controlId="formBasicName">
              <Form.Control
                className="border-top-0 border-end-0"
                type="text"
                placeholder="Enter Your Name"
              />
            </Form.Group>
            <Form.Group className="my-5" controlId="formBasicEmail">
              <Form.Control
                className="border-top-0 border-end-0"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="my-5" controlId="formBasicPassword">
              <Form.Control
                className="passowrd-form border-top-0 border-end-0"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Agree To terms & condition" />
            </Form.Group>
            <Button
              className="mx-auto d-block px-5 mt-5 mb-2"
              variant="outline-secondary"
              type="submit"
            >
              Register
            </Button>
          </Form>
          <p>
            <small>
              Already Registered? <Link to="/login">Login</Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
