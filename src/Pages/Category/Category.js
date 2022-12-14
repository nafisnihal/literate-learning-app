import React from "react";
import { Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Course from "../Courses/Course";

const Category = () => {
  const courses = useLoaderData();
  return (
    <Row>
      {courses.map((course) => (
        <Course key={course._id} course={course}></Course>
      ))}
    </Row>
  );
};

export default Category;
