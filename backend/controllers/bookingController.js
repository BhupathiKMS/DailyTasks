const asyncHandler = require('express-async-handler');
const Booking = require('../models/Booking');

const getBookings = asyncHandler(async (req, res) => {
  const bookings = await Booking.find({ user: req.user._id });
  res.json(bookings);
});

const addBooking = asyncHandler(async (req, res) => {
  const { providerId, slotTime, amount } = req.body;
  const booking = new Booking({ user: req.user._id, provider: providerId, slotTime, amount });
  const createdBooking = await booking.save();
  res.status(201).json(createdBooking);
});

module.exports = { getBookings, addBooking };
