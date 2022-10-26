import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HomeImage from '../../Assets/Images/homeImage.png'

const Home = () => {
    return (
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col lg="5" className="text-center text-dark mt-5 mt-lg-0">
            <h1>Let's Learn</h1>
          </Col>
          <Col lg="7">
            <img className="img-fluid" src={HomeImage} alt="" />
          </Col>
        </Row>
      </Container>
    );
};

export default Home;