import React from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from 'react-router-dom';

const Register = () => {
    return (
      <div>
        <Form className="w-50 mx-auto mt-5 bg-dark text-light rounded py-4 px-4">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" name='name' placeholder="enter your name" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control type="text" name='photoURL' placeholder="enter photo url" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name='email' placeholder="enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="enter password"
              required
            />
          </Form.Group>
          
          <Form.Text className="text-danger d-block mb-3 ms-1">
            Error here
          </Form.Text>
          <Button variant="light" type="submit">
            Register
          </Button>
          <Form.Text className="text-secondary d-block mt-4 text-center">
            Already have an account?{" "}
            <Link className="text-decoration-none text-light" to="/login">
              Go to Login
            </Link>
          </Form.Text>
        </Form>
      </div>
    );
};

export default Register;