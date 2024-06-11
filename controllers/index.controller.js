const Car = require("../models/car");

exports.getAllCars = async (req, res) => {
  var filter = {rented: false}
  if(req.query)
  {
    
    const keys = Object.keys(req.query)
    
    for(const key of keys)
    {
      filter[key] = req.query[key]
    }

  }
  //console.log(filter)
    await Car.find(filter).then((cars) => {
      //console.log(cars)
      res.send(cars);
    },
    (err) => {
      res.status(500).send({ message: err });
      return;
    })
  
    
}

exports.getCar = async (req, res) => {
    await Car.findById(req.params.id).then((cars) => {
        console.log("Specific car sent successfully")
        res.send(cars);
      },
      (err) => {
        res.status(500).send({ message: err });
        return;
      })
}