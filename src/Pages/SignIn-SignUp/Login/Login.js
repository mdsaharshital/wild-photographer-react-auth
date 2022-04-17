import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import auth from "./../../../firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  };

  let from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div className="my-5">
      <h1 className="text-center">Login now</h1>
      <div className="col-10 col-md-8 col-lg-6 mx-auto">
        <Form onSubmit={handleLogin}>
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
          {/* error */}
          {error && <p className="text-danger">{error?.message}</p>}
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
