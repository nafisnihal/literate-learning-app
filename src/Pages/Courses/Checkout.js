import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { FaDollarSign } from "react-icons/fa";

const Checkout = () => {
  const checkoutCourse = useLoaderData();
  const { title, image_url } = checkoutCourse;
  return (
    <div className="w-50 mx-auto my-5">
      <Card className="text-dark">
        <Card.Img className="w-75 mx-auto my-2" src={image_url} alt={title} />
        <Card.Header>{title}</Card.Header>
        <Card.Header className="">Price: $99</Card.Header>
        <Button className="my-2 mx-4" variant="dark">
          Proceed To Payment <FaDollarSign className="pb-1"></FaDollarSign>
        </Button>
      </Card>
    </div>
  );
};

export default Checkout;
