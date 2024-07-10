const express = require('express');
const { getProviders, searchProviders } = require('../controllers/providerController');
const router = express.Router();

router.route('/').get(getProviders);
router.route('/search').get(searchProviders);

module.exports = router;
