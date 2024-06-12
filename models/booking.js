const mongoose = require("mongoose");

const Booking = mongoose.model(
  "Booking",
  new mongoose.Schema({
    from: {type: Date, required: true},
    to: {type: Date, required: true},
    total_bill: {type: Number, required: true},
    owner: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
    car_id: {type: mongoose.Schema.Types.ObjectId, ref:'Car'},
    make: {type: String},
    model: {type: String},
    price_per_day: {type: Number},
    url: {type: String},
    rented_by: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  })
);

module.exports = Booking;
