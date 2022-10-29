import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { FaDollarSign } from "react-icons/fa";
import CardHeader from "react-bootstrap/esm/CardHeader";

const Checkout = () => {
  const checkoutCourse = useLoaderData();
  const { title, image_url } = checkoutCourse;
  return (
    <div className="w-50 mx-auto my-5">
      <Card className="text-dark">
        <Card.Header>{title}</Card.Header>
        <Card.Img src={image_url} alt={title} />
        <Button variant="dark" className="w-25 mt-2 mx-auto" disabled>
          Price: $99
        </Button>
        <Button className="my-2 mx-4" variant="dark">
          Proceed To Payment <FaDollarSign className="pb-1"></FaDollarSign>
        </Button>
      </Card>
    </div>
  );
};

export default Checkout;
