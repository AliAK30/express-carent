var router = require("express").Router();
const controller = require("../controllers/user.controller");

//Route for adding car
router.post("/car/add", controller.addCar)

//Route for getting all user cars
router.get("/cars/:ownerid", controller.getCars)

//Route for getting specific user car
router.get("/cars/:ownerid/:carid", controller.getSpecificCar)

//Route for renting a car
router.post("/car/rent", controller.rentCar)

module.exports = router