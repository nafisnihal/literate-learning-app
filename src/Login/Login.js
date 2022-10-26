import { GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const Login = () => {
  const { providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="">
      <Form className="w-50 mx-auto mt-5 bg-dark text-light rounded py-4 px-4">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Text className="text-danger d-block mb-3 ms-1">
          Error here
        </Form.Text>
        <Button variant="light" type="submit">
          Login
        </Button>
        <Form.Text className="text-secondary d-block mt-4 text-center">
          Don't have an account?{" "}
          <Link className="text-decoration-none text-light" to="/register">
            Create an account
          </Link>
        </Form.Text>
      </Form>
      <div className="w-50 mx-auto mt-1 bg-dark text-light rounded py-4 px-4">
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
    </div>
  );
};

export default Login;
<h1>Login</h1>;