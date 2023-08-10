import React from 'react';
import Card from 'react-bootstrap/Card';

const Blog = () => {
  return (
    <div className="mx-auto">
      <h3 className="w-50 mx-auto text-center text-light py-4 my-4 bg-dark">
        Blogs
      </h3>
      <div className="row gap-5">
        <Card className="my-5 col h-100 ">
          <Card.Body>
            <Card.Title className="border-bottom pb-3">
              What is cors?
            </Card.Title>
            <Card.Text>
              Cross-Origin Resource Sharing (CORS) is an HTTP-header based
              mechanism that allows a server to indicate any origins (domain,
              scheme, or port) other than its own from which a browser should
              permit loading resources. CORS also relies on a mechanism by which
              browsers make a "preflight" request to the server hosting the
              cross-origin resource, in order to check that the server will
              permit the actual request. In that preflight, the browser sends
              headers that indicate the HTTP method and headers that will be
              used in the actual request.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="my-5 col h-100 ">
          <Card.Body>
            <Card.Title className="border-bottom pb-3">
              Why are you using firebase? What other options do you have to
              implement authentication?
            </Card.Title>
            <Card.Text>
              Firebase is secure and trusted authentication provider. I also can
              implement authentication by OAuth, implementing own authentication
              on backend, etc.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="my-5 col h-100 ">
          <Card.Body>
            <Card.Title className="border-bottom pb-3">
              How does the private route work?
            </Card.Title>
            <Card.Text>
              The private route component is similar to the public route, the
              only change is that redirect URL and authenticate condition. If
              the user is not authenticated he will be redirected to the login
              page and the user can only access the authenticated routes If he
              is authenticated (Logged in).
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="my-5 col h-100 ">
          <Card.Body>
            <Card.Title className="border-bottom pb-3">
              What is Node? How does Node work?
            </Card.Title>
            <Card.Text>
              {' '}
              Node.js is an open-source backend javascript runtime environment.
              It is a used as backend service where javascript works on the
              server-side of the application. This way javascript is used on
              both frontend and backend. Node.js runs on chrome v8 engine which
              converts javascript code into machine code, it is highly scalable,
              lightweight, fast, and data-intensive. Node.js accepts the request
              from the clients and sends the response, while working with the
              request node.js handles them with a single thread. To operate I/O
              operations or requests node.js use the concept of threads. Thread
              is a sequence of instructions that the server needs to perform.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Blog;
