import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import ProvidersPage from './pages/ProvidersPage';
import BookingPage from './pages/BookingPage';
import ManageBookingsPage from './pages/ManageBookingsPage';
import './App.css';  // Import global styles

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/providers" element={<ProvidersPage />} />
          <Route path="/book" element={<BookingPage />} />
          <Route path="/manage-bookings" element={<ManageBookingsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
