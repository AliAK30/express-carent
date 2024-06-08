const mongoose = require("mongoose");

const Car = mongoose.model(
  "Car",
  new mongoose.Schema({
    make: {type: String, required: true},
    model: {type: String, required: true},
    year: {type: String, required: true},
    exterior_color: {type: String, required: true},
    gas_mileage: {type: Number, required: true},
    price_per_day: {type: Number, required: true},
    description: {type: String, required: true},
    photos_url: {type: [String], required: true},
    address: {type: String, required: true}
  })
);

module.exports = Car;
