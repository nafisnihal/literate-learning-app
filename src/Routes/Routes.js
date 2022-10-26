import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../Login/Login";
import Register from "../Login/Register";
import Category from "../Pages/Category/Category";
import AllCourse from "../Pages/Courses/AllCourse";
import Checkout from "../Pages/Courses/Checkout";
import CourseDetails from "../Pages/Courses/CourseDetails";
import Courses from "../Pages/Courses/Courses";
import Home from "../Pages/Home/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        children: [
          {
            path: "/courses",
            element: <AllCourse></AllCourse>,
            loader: () => fetch("http://localhost:5000/courses"),
          },
          {
            path: "/courses/category/:id",
            element: <Category></Category>,
            loader: ({ params }) =>
              fetch(`http://localhost:5000/category/${params.id}`),
          },
          {
            path: "/courses/course/:id",
            element: <CourseDetails></CourseDetails>,
            loader: ({ params }) =>
              fetch(`http://localhost:5000/course/${params.id}`),
          },
        ],
      },
      {
        path: "/checkout/:id",
        element: <Checkout></Checkout>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/course/${params.id}`),
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ],
  },
]);
