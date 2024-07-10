import React, { useState } from 'react';
import axios from 'axios';

const BookingPage = () => {
  const [providerId, setProviderId] = useState('');
  const [slotTime, setSlotTime] = useState('');
  const [amount, setAmount] = useState('');

  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/bookings', { providerId, slotTime, amount });
      console.log('Booking successful', data);
    } catch (error) {
      console.error('Error booking', error);
    }
  };

  return (
    <form onSubmit={handleBooking}>
      <h2>Book a Slot</h2>
      <div>
        <label>Provider ID</label>
        <input type="text" value={providerId} onChange={(e) => setProviderId(e.target.value)} />
      </div>
      <div>
        <label>Slot Time</label>
        <input type="text" value={slotTime} onChange={(e) => setSlotTime(e.target.value)} />
      </div>
      <div>
        <label>Amount</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      <button type="submit">Book Slot</button>
    </form>
  );
};

export default BookingPage;
