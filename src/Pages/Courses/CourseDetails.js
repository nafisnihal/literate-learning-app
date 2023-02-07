import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaStar } from "react-icons/fa";

const ref = React.createRef();

const CourseDetails = () => {
  const courseDetails = useLoaderData();
  const { _id, title, image_url, details } = courseDetails;

  return (
    <div className="w-75 mx-auto">
      <Card className="text-center">
        <div ref={ref}>
          <Card.Img className="img-fluid" variant="top" src={image_url} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{details}</Card.Text>
            <Link to={`/checkout/${_id}`}>
              <Button variant="dark">
                <FaStar className="pb-1"></FaStar> Get Premium Access
              </Button>
            </Link>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
};

export default CourseDetails;
