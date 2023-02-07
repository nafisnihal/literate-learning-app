import React from 'react';

const NotFound = () => {
    return (
      <div className="text-center text-light">
        <div className="my-5 bg-dark w-75 mx-auto rounded p-4">
          <h1 className="mx-5 ">Ops Ops...</h1>
          <h3 className="my-5">
            The page you are looking for may have been removed, deleted or
            probably never existed.
          </h3>
          <h1 className="fs-1 fw-bold my-5">404</h1>
        </div>
      </div>
    );
};

export default NotFound;