import { GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const Login = () => {
    const [error, setError] = useState('');
  const { providerLogin, login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/courses';

  const googleProvider = new GoogleAuthProvider();

  const handleLogin = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError('');
        navigate(from, {replace: true});
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
    });
  }

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="">
      <Form
        onSubmit={handleLogin}
        className="w-50 mx-auto mt-5 bg-dark text-light rounded py-4 px-4"
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Text className="text-danger d-block mb-3 ms-1">
          {error ? <p>Wrong credential, please check again.</p> : ""}
        </Form.Text>
        <Button className='mt-2' variant="light" type="submit">
          Login
        </Button>
        <Form.Text className="text-secondary d-block mt-4 text-center">
          Don't have an account?{" "}
          <Link className="text-decoration-none text-light" to="/register">
            Create an account
          </Link>
        </Form.Text>
        <hr />
        <div className="w-75 mx-auto mt-1 bg-dark text-light rounded pt-1 px-4">
          <Button
            onClick={handleGoogleSignIn}
            className="w-100"
            variant="light"
            type="submit"
          >
            Continue with Google <FaGoogle className="mb-1 ms-1"></FaGoogle>
          </Button>
          <Button className="w-100 mt-2" variant="light" type="submit">
            Continue with GitHub <FaGithub className="mb-1 ms-1"></FaGithub>
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
<h1>Login</h1>;
