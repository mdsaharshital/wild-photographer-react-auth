import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect scrolling dark expand="md" fixed="top">
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
            React-Bootstrap
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
