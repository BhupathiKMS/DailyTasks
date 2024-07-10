const asyncHandler = require('express-async-handler');
const Provider = require('../models/Provider');

const getProviders = asyncHandler(async (req, res) => {
  const providers = await Provider.find({});
  res.json(providers);
});

const searchProviders = asyncHandler(async (req, res) => {
  const { query } = req.query;
  const providers = await Provider.find({ name: { $regex: query, $options: 'i' } });
  res.json(providers);
});

module.exports = { getProviders, searchProviders };
