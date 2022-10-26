import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaStar } from "react-icons/fa";

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const { _id, title, image_url, details } = courseDetails;
    return (
      <div className='w-75 mx-auto'>
        <Card className="text-center">
          <Card.Img className="img-fluid" variant="top" src={image_url} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{details}</Card.Text>
            <Button variant="dark"> <FaStar className='pb-1'></FaStar> Get Premium Access</Button>
          </Card.Body>
        </Card>
      </div>
    );
};

export default CourseDetails;