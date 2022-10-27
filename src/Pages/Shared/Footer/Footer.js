import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image from '../../../Assets/Images/logo.png';
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaTiktok,
  FaYoutube
} from "react-icons/fa";

const Footer = () => {
    return (
      <div className="bg-dark p-5 text-light">
        <Container>
          <Row>
            <Col
              lg="3"
              className="d-flex flex-column align-items-start justify-content-center"
            >
              <img src={image} alt="" srcset="" />
            </Col>
            <Col className="mx-auto" lg="2">
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
            <Col lg="2">
              <h6>Find us on:</h6>
              <div className="d-flex justify-content-between me-5">
                <FaFacebookSquare></FaFacebookSquare>
                <FaTwitterSquare></FaTwitterSquare>
                <FaInstagram></FaInstagram>
                <FaYoutube></FaYoutube>
                <FaTiktok></FaTiktok>
              </div>
              <p className='mt-5 mb-0'>Copyright:</p>
              <p>©Literate Limited</p>
            </Col>
            <Col lg="4"></Col>
          </Row>
        </Container>
      </div>
    );
};

export default Footer;