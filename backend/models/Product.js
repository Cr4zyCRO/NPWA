const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  alcoholPercentage: Number,
  cocoaPercentage: Number,
  milkPercentage: Number,
  color: String,
  type: String,
  manufacturerId: mongoose.Schema.Types.ObjectId // Reference to Manufacturer
});

module.exports = mongoose.model('Product', ProductSchema);
