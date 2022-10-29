import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image from '../../../Assets/Images/logo.png';
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaTiktok,
  FaYoutube
} from "react-icons/fa";
import Form from "react-bootstrap/Form";

const Footer = () => {
    return (
      <div className="bg-dark py-3 py-lg-5 text-light mt-5 mb-0">
        <Container>
          <Row>
            <Col
              lg="4"
              className="d-flex flex-column align-items-center justify-content-center"
            >
              <img src={image} alt=""/>
            </Col>
            <Col className="mx-auto mt-5 mt-lg-0" sm="6" xs="6" lg="2">
              <h6>Quick Links</h6>
              <Link className="d-block text-decoration-none text-light" to="/">
                Home
              </Link>
              <Link
                className="d-block text-decoration-none text-light"
                to="/courses"
              >
                Courses
              </Link>
              <Link
                className="d-block text-decoration-none text-light"
                to="/faq"
              >
                FAQ
              </Link>
              <Link
                className="d-block text-decoration-none text-light"
                to="/blog"
              >
                Blog
              </Link>
              <Link
                className="d-block text-decoration-none text-light"
                to="/login"
              >
                Login
              </Link>
              <Link
                className="d-block text-decoration-none text-light"
                to="/register"
              >
                Register
              </Link>
            </Col>
            <Col className="mt-5 mt-lg-0" sm="6" xs="6" lg="2">
              <h6>Find us on:</h6>
              <div className="d-flex justify-content-between me-5 mt-3">
                <FaFacebookSquare></FaFacebookSquare>
                <FaTwitterSquare></FaTwitterSquare>
                <FaInstagram></FaInstagram>
                <FaYoutube></FaYoutube>
                <FaTiktok></FaTiktok>
              </div>
              <p className="mt-5 mb-0">Copyright:</p>
              <p>©Literate Limited</p>
            </Col>
            <Col className="mt-5 mt-lg-0" lg="4">
              <Form.Group
                className="mb-3 d-flex flex-column justify-content-evenly h-100"
                controlId="formBasicEmail"
              >
                <Form.Label>Subscribe our newsletter to get update.</Form.Label>
                <Form.Control
                  className="rounded"
                  name="email"
                  type="email"
                  placeholder="Enter email"
                />
                <Button variant="light">Subscribe</Button>
              </Form.Group>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default Footer;