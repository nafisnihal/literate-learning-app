import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../../Assets/Images/logo.png";

const Header = () => {
  return (
    <Navbar
      className="py-2"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand className="m-0 p-0" href="#home">
          <img
            width="80"
            height=""
            src={logo}
            alt="Literate"
            className="p-0 m-0 fw-bold"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className="text-decoration-none me-3 text-light" to="/">
              HOME
            </Link>
            <Link className="text-decoration-none me-3 text-light" to="/courses">
              COURSES
            </Link>
            <Link className="text-decoration-none me-3 text-light">FAQ</Link>
            <Link className="text-decoration-none text-light">BLOG</Link>
          </Nav>
          <Nav>
            <Link>
              <Button className="me-2 mb-sm-2 mb-lg-0" variant="outline-light">
                Login
              </Button>
            </Link>
            <Link>
              <Button className="" variant="light">
                Sign Up
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
