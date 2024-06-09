const mongoose = require("mongoose");

const Booking = mongoose.model(
  "Booking",
  new mongoose.Schema({
    from: {type: Date, required: true},
    to: {type: Date, required: true},
    total_bill: {type: Number, required: true},
    owner: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
    car_id: {type: mongoose.Schema.Types.ObjectId, ref:'Car'},
    rented_by: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  })
);

module.exports = Booking;
