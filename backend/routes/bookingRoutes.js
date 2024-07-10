const express = require('express');
const { getBookings, addBooking } = require('../controllers/bookingController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/').get(protect, getBookings).post(protect, addBooking);

module.exports = router;
