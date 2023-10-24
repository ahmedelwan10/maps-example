import React from 'react';
import { Alert } from 'react-bootstrap';

const Welcome = () => {
  return (
    <div className="text-center">
      <h2>Welcome to Our App</h2>
      <Alert variant="info">
        We have a great selection of Books for you to explore.
      </Alert>
    </div>
  );
};

export default Welcome;
