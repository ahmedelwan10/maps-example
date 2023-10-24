import React from 'react';


const MyFooter = () => {
  return (
    <footer className="bg-dark text-white text-center p-3">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} My App</p>
      </div>
    </footer>
  );
};

export default MyFooter;
