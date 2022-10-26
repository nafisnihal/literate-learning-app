import React from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Course = ({course}) => {
    console.log(course);
    const {_id, title, image_url, details} = course;
  return (
    <Col className=" mb-5 " lg="4">
      <Card
        className="bg-dark text-light border border-5 border-dark h-100"
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
          <Button variant="light">See Details</Button>
          {/* <Link to={`/courses/course/${_id}`}>Read More</Link>{" "} */}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Course;
