import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="my-5">
      <h1 className="text-center">Login now</h1>
      <div className="w-50 mx-auto">
        <Form>
          <Form.Group className="my-5" controlId="formBasicEmail">
            <Form.Control
              className="border-top-0 border-end-0"
              type="email"
              name="email"
              required
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="my-5" controlId="formBasicPassword">
            <Form.Control
              className="passowrd-form border-top-0 border-end-0"
              type="password"
              name="password"
              required
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
            Log in
          </Button>
        </Form>
        <p>
          <small>
            New here? <Link to="/register">Register Now</Link>
          </small>
        </p>
      </div>
    </div>
  );
};

export default Login;
