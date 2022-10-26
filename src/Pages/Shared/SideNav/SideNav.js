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
      <div>
        <h3 className="text-center text-light border rounded border-dark p-2 w-auto mb-3 bg-dark"><FaGripHorizontal className='me-1 pb-1'></FaGripHorizontal>
          Categories
        </h3>
        <div>
          {categories.map((category) => (
            <Link to={`/category/${category.id}`} key={category.id}>
              <Button className="mb-2 w-100" variant="outline-dark">
                {category.name}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    );
};

export default SideNav;