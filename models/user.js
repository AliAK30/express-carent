const mongoose = require("mongoose");

const Superuser = mongoose.model(
  "Superuser",
  new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, required: true},
  })
);

module.exports = Superuser;
