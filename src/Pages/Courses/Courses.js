import React from 'react';
import SideNav from '../Shared/SideNav/SideNav';
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from 'react-router-dom';

const Courses = () => {
    return (
      <div>
        <Container>
          <Row className='mt-5'>
            <Col lg="10">
                <Outlet></Outlet>
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