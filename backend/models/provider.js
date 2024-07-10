const mongoose = require('mongoose');

const providerSchema = mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
});

const Provider = mongoose.model('Provider', providerSchema);
module.exports = Provider;
