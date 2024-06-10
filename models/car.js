const mongoose = require("mongoose");

const Car = mongoose.model(
  "Car",
  new mongoose.Schema({
    make: {type: String, lowercase: true, required: true},
    model: {type: String, lowercase: true, required: true},
    year: {type: String, required: true},
    category: {type: String, lowercase: true, required: true},
    exterior_color: {type: String, lowercase: true, required: true},
    gas_mileage: {type: Number, required: true},
    price_per_day: {type: Number, required: true},
    description: {type: String, required: true},
    photos_url: {type: [String], required: true},
    city: {type: String, lowercase: true, required: true},
    address: {type: String, required: true},
    owner: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
    owner_fullname: {type: String},
    rented: {type: Boolean},
  })
);

module.exports = Car;
