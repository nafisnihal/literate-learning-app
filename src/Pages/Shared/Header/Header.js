import React, { useRef, useState } from "react";
import { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../../Assets/Images/logo.png";
import { AuthContext } from "../../../contexts/AuthProvider";
import { FaUserAlt } from "react-icons/fa";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import { HiLightBulb } from "react-icons/hi";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const [light, setLight] = useState(true);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const handleLight = () => {
    light ? setLight(false) : setLight(true);
  };

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
            <Nav>
              {light ? (
                <>
                  <Button
                    onClick={handleLight}
                    variant="dark"
                    className="fs-5 border-0 m-0 pt-0 px-1"
                  >
                    <HiLightBulb></HiLightBulb>
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    onClick={handleLight}
                    variant="light"
                    className="fs-5 border-0 m-0 pt-0 px-1"
                  >
                    <HiLightBulb></HiLightBulb>
                  </Button>
                </>
              )}
            </Nav>
            {user?.photoURL ? (
              <>
                <Image
                  ref={target}
                  onMouseEnter={() => setShow(!show)}
                  className="mx-2 my-auto"
                  style={{ height: "30px" }}
                  rounded
                  fluid
                  src={user?.photoURL}
                ></Image>
                <Overlay target={target.current} show={show} placement="bottom">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      {user?.displayName}
                    </Tooltip>
                  )}
                </Overlay>
              </>
            ) : (
              <FaUserAlt className="text-light mx-2 my-auto p-1 fs-2 border rounded"></FaUserAlt>
            )}
            {user?.uid ? (
              <Button onClick={handleLogOut} variant="light">
                Logout{" "}
                <HiOutlineChevronDoubleRight></HiOutlineChevronDoubleRight>
              </Button>
            ) : (
              <>
                <Link to="/login">
                  <Button
                    className="me-lg-2 mb-2 mb-lg-0"
                    variant="outline-light"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="" variant="light">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
