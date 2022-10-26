import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import { FaGripHorizontal } from "react-icons/fa";

const SideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect( () =>{
        fetch("http://localhost:5000/course-categories")
          .then((res) => res.json())
          .then((data) => setCategories(data));
    } ,[])

    return (
      <div className="mb-5">
        <h3 className="text-center text-light border rounded border-dark p-4 w-auto mb-3 bg-dark">
          <FaGripHorizontal className="me-1 pb-1"></FaGripHorizontal>
          Categories
        </h3>
        <div>
          {categories.map((category) => (
            <Link to={`/courses/category/${category.id}`} key={category.id}>
              <Button className="mb-2 w-100 pt-3 pb-3" variant="outline-dark">
                {category.name}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    );
};

export default SideNav;