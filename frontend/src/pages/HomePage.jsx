import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';  // Import global styles

const HomePage = () => {
  return (
    <div className="container">
      <h1>Welcome to the Gas Slot Booking App</h1>
      <p>Book your gas delivery slots conveniently and securely.</p>
      <div className="buttons-container">
        <Link to="/login" className="button">
          Login
        </Link>
        <Link to="/register" className="button">
          Register
        </Link>
        <Link to="/providers" className="button">
          View Providers
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
