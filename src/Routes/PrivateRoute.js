import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import Spinner from "react-bootstrap/Spinner";

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return (
          <div className='d-flex justify-content-center align-items-center my-5 py-5'>
            <Spinner className='my-5' animation="border" />
          </div>
        );
    }

    if(!user){
        return <Navigate to='/login' state={{from: location}} replace ></Navigate>
    }
    return children;
};

export default PrivateRoute;