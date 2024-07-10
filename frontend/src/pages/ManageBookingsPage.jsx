import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageBookingsPage = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const { data } = await axios.get('/api/bookings');
        setBookings(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching bookings', error);
      }
    };
    fetchBookings();
  }, []);

  return (
    <div>
      <h2>Manage Bookings</h2>
      <ul>
        {bookings.map((booking) => (
          <li key={booking._id}>
            {booking.provider.name} - {booking.slotTime} - ${booking.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageBookingsPage;
