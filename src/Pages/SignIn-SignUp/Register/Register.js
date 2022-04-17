import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../shared/Loading/Loading";
import { useUpdateProfile } from "react-firebase-hooks/auth";

const Register = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, UpdateProfileError] = useUpdateProfile(auth);

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    navigate("/");
  };

  if (loading || updating) {
    return <Loading />;
  }
  return (
    <div>
      <div className="my-5">
        <h1 className="text-center">Register now</h1>
        <div className="col-10 col-md-8 col-lg-6 mx-auto">
          <Form onSubmit={handleRegisterSubmit}>
            <Form.Group className="my-5" controlId="formBasicName">
              <Form.Control
                className="border-top-0 border-end-0"
                type="text"
                name="name"
                required
                placeholder="Enter Your Name"
              />
            </Form.Group>
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
            {error && (
              <p>
                <small className="text-danger">{error?.message}</small>
              </p>
            )}
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
