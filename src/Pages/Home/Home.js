import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HomeImage from '../../Assets/Images/homeImage.png'

const Home = () => {
    return (
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col lg="5" className="text-start text-dark mt-5 mt-lg-0">

            <p className='fs-1 fw-bold text-start'>Literate is a New World Skill Development Plartform.</p>
            <Link to='/courses'>
              <Button className="" variant="outline-dark">
                Start Exploring
              </Button>
            </Link>
          </Col>
          <Col lg="7">
            <img className="img-fluid" src={HomeImage} alt="" />
          </Col>
        </Row>
      </Container>
    );
};

export default Home;