const Car = require("../models/car");
const Booking = require("../models/booking")
const ObjectId = require('mongoose').Types.ObjectId

exports.addCar = async (req, res) => {
    const urls = req.files.map((file)=> {
        return file.path
    })

    const car = new Car({
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        category: req.body.category,
        exterior_color: req.body.exterior_color,
        gas_mileage: req.body.gas_mileage,
        price_per_day: req.body.price_per_day,
        description: req.body.description,
        city: req.body.city,
        photos_url: urls,
        address: req.body.address,
        owner: new ObjectId(req.body.owner),
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
    await Car.find({owner: new ObjectId(req.params.ownerid)}).then((cars) => {
        console.log("All user cars sent successfully")
        res.send(cars);
      },
      (err) => {
        res.status(500).send({ message: err });
        return;
      })
}

exports.getSpecificCar = async (req, res) => {
    await Car.find({_id: new ObjectId(req.params.carid), owner: new ObjectId(req.params.ownerid), }).then((cars) => {
        console.log("Specific car sent successfully")
        res.send(cars);
      },
      (err) => {
        res.status(500).send({ message: err });
        return;
      })
}

exports.rentCar = async (req, res) => {

    const booking = new Booking({
      from: req.body.from,
      to: req.body.to,
      total_bill: req.body.total_bill,
      owner: new ObjectId(req.body.owner),
      car_id: new ObjectId(req.body.car_id),
      rented_by: new ObjectId(req.body.rented_by),

    })
   // await Car.updateOne({_id: booking.car_id}, {rent_status: true}).then(car=>{console.log(car)}, err=>console.log(err))
  await  Car.updateOne({_id:{$eq: booking.car_id} }, {rented: true}).then(some=>console.log(some))
    await booking.save().then(
      (booking) => {
        console.log("Car booked successfully!", booking);
        
        res.send({ message: "Car booked successfully!" });
      },
      (err) => {
        res.status(500).send({ message: err });
        return;
      }
    );
}


