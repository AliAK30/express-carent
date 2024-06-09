const User = require("../models/user");
const Car = require("../models/car");
const mongoose = require('mongoose')

exports.addCar = async (req, res) => {
    const urls = req.files.map((file)=> {
        return file.path
    })

    const car = new Car({
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        exterior_color: req.body.exterior_color,
        gas_mileage: req.body.gas_mileage,
        price_per_day: req.body.price_per_day,
        description: req.body.description,
        city: req.body.city,
        photos_url: urls,
        address: req.body.address,
        owner: new mongoose.Types.ObjectId(req.body.owner),
        owner_fullname: req.body.owner_name,
        rented: false,

    })
    await car.save().then(
        (car) => {
          console.log("Car was added successfully!", car);
          res.send({ message: "Car was added successfully!" });
        },
        (err) => {
          res.status(500).send({ message: err });
          return;
        }
      );
}

exports.getCars = async (req, res) => {
    await Car.find().then((cars) => {
        res.send(cars);
      },
      (err) => {
        res.status(500).send({ message: err });
        return;
      })
}



