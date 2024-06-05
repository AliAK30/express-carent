const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    fullname: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    phone: Number,
    cnic: String
  })
);

module.exports = User;
