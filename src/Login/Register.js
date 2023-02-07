import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');

    const { createUser, updateUser } = useContext(AuthContext);

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then( result => {
            const user = result.user;
            console.log(user);
            setError('');
            handleUpdateUser(name, photoURL);
            form.reset();
        })
        .catch(error => {
            console.error(error);
            setError(error.message);
        })
    }

    const handleUpdateUser = (name, photoURL) => {
      const profile = {
        displayName: name,
        photoURL: photoURL
      }
      updateUser(profile)
      .then(() => {})
      .then(() => {})
    }

    return (
      <div className='mb-5'>
        <Form
          onSubmit={handleSubmit}
          className="w-50 mx-auto my-5 bg-dark text-light rounded py-4 px-4"
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="enter your name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control
              type="text"
              name="photoURL"
              placeholder="enter photo url"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="enter email"
              required
            />
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
            {error}
          </Form.Text>
          <Button className="mt-2" variant="light" type="submit">
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