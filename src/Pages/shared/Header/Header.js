import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import logomain from "../../../images/main-logo.png";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY <= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="md"
        fixed="top"
        className={navbar ? "navbar" : "navbar active"}
      >
        <Container>
          {/* left side menu bar */}
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="#pricing" className="text-white">
                About us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          {/* Middle section */}
          <Navbar.Brand href="#home" className="text-white">
            Md Shahar Shital
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          {/* right side menu bar */}
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#features" className="text-white">
                Blogs
              </Nav.Link>
              <Nav.Link href="#pricing" className="text-white">
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
