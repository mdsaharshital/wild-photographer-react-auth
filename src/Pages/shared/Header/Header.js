import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="md" sticky="top" bg="light">
        <Container>
          {/* left side menu bar */}
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className="">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/aboutme" className="">
                About me
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          {/* Middle section */}
          <Navbar.Brand as={Link} to="/" className="">
            Md Shahar Shital
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          {/* right side menu bar */}
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/blogs" className="">
                Blogs
              </Nav.Link>
              <Nav.Link as={Link} to="/login" className="">
                Log in
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
