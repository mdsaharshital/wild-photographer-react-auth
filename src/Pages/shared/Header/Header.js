import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <>
      <Navbar collapseOnSelect expand="md" sticky="top" bg="light">
        <Container>
          {/* left side menu bar */}
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={CustomLink} to="/" className="">
                Home
              </Nav.Link>
              <Nav.Link as={CustomLink} to="/aboutme" className="">
                About me
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          {/* Middle section */}
          <Navbar.Brand as={CustomLink} to="/" className="header-title">
            Sheikh Mujib
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          {/* right side menu bar */}
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={CustomLink} to="/blogs" className="">
                Blogs
              </Nav.Link>
              {user?.uid ? (
                <button onClick={logout} className="btn btn-outline-secondary">
                  Log Out
                </button>
              ) : (
                <Nav.Link as={CustomLink} to="/login" className="">
                  Log in
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
