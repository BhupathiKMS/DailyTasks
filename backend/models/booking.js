const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  provider: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Provider' },
  slotTime: { type: String, required: true },
  amount: { type: Number, required: true },
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
