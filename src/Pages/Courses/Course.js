import React from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  // console.log(course);
  const { _id, title, image_url, details } = course;
  return (
    <Col className="mb-5" md="6" lg="4">
      <Card
        className="bg-dark text-light border border-5 border-dark h-100 m-auto"
        style={{ width: "18rem" }}
      >
        <Card.Img
          className="rounded"
          style={{ height: "10rem" }}
          variant="top"
          src={image_url}
        />
        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details.length > 100 ? (
              <>{details.slice(0, 100) + "..."} </>
            ) : (
              details
            )}
          </Card.Text>
          <Link to={`/courses/course/${_id}`}>
            <Button className="w-100" variant="light">
              See Details
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Course;
