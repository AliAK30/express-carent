const User = require("../models/user");
const Car = require("../models/car");

exports.addCar = async (req, res) => {
    console.log(req.files)
    console.log(req.body)
    res.status(200).send({ok:"ok"})
}



