import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FaGripHorizontal } from 'react-icons/fa';
import Accordion from 'react-bootstrap/Accordion';

const SideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://literate-server.vercel.app/course-categories')
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="mb-5">
      <div className="d-none d-lg-block">
        <h3 className="text-center text-light border rounded border-dark p-2 w-auto mb-3 bg-dark">
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
      <Accordion className="d-lg-none">
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h3 className="text-center text-light border rounded border-dark mt-1 p-2 w-100 bg-dark">
              Tap Me for Categories <FaGripHorizontal></FaGripHorizontal>
            </h3>
          </Accordion.Header>
          <Accordion.Body>
            <div>
              {categories.map((category) => (
                <Link to={`/courses/category/${category.id}`} key={category.id}>
                  <Button
                    className="mb-2 w-100 pt-3 pb-3"
                    variant="outline-dark"
                  >
                    {category.name}
                  </Button>
                </Link>
              ))}
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default SideNav;
