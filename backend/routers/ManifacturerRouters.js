const express = require('express');
const router = express.Router();
const Manufacturer = require('../models/Manufacturer');

// Get all manufacturers
router.get('/manufacturers', async (req, res) => {
  const manufacturers = await Manufacturer.find();
  res.json(manufacturers);
});

// Create a manufacturer
router.post('/manufacturers', async (req, res) => {
  const newManufacturer = new Manufacturer(req.body);
  await newManufacturer.save();
  res.json(newManufacturer);
});

module.exports = router;
