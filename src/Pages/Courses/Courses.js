import React from 'react';
import SideNav from '../Shared/SideNav/SideNav';
import { Col, Container, Row } from "react-bootstrap";

const Courses = () => {
    return (
      <div>
        <Container>
          <Row className='mt-5'>
            <Col lg="10">
              <h1>All Courses</h1>
            </Col>
            <Col lg="2">
              <SideNav></SideNav>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default Courses;