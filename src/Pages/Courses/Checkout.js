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
        <Card.Img src={image_url} alt={title} />
        <Card.ImgOverlay>
          <Card.Title>{title}</Card.Title>
          <Card.Text className=""></Card.Text>
        </Card.ImgOverlay>
        <Button className="my-2 mx-4" variant="dark">
          Proceed To Payment <FaDollarSign className="pb-1"></FaDollarSign>
        </Button>
      </Card>
    </div>
  );
};

export default Checkout;