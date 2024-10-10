const mongoose = require('mongoose');

const ManufacturerSchema = new mongoose.Schema({
  name: String,
  yearEstablished: Number,
  country: String,
  description: String,
  logoUrl: String,
});

module.exports = mongoose.model('Manufacturer', ManufacturerSchema);
