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
      sticky="top"
    >
      <Container>
        <Navbar.Brand className="m-0 p-0" href="#home">
          <Link to="/">
            <img
              width="80"
              height=""
              src={logo}
              alt="Literate"
              className="p-0 m-0 fw-bold"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link
              className="text-decoration-none me-lg-3 text-light mt-3 mt-lg-0 text-end"
              to="/courses"
            >
              COURSES
            </Link>
            <Link className="text-decoration-none me-lg-3 text-light mt-3 mt-lg-0 text-end">
              FAQ
            </Link>
            <Link className="text-decoration-none text-light mt-3 mt-lg-0 text-end">
              BLOG
            </Link>
          </Nav>
          <Nav className="d-sm-flex justify-content-end">
            <Link>
              <Button className="me-lg-2 mb-2 mb-lg-0" variant="outline-light">
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
