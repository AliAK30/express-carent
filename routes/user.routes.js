var router = require("express").Router();
const controller = require("../controllers/user.controller");

//Route for adding car
router.post("/car/add", controller.addCar)

//Route for getting all user cars
router.get("/cars/:ownerid", controller.getCars)

//Route for getting specific user car
router.get("/cars/:ownerid/:carid", controller.getSpecificCar)

//Route for deleting specific car
router.delete("/car/delete/:carid", controller.deleteCar)

//Route for renting a car
router.post("/car/rent", controller.rentCar)

//Route for getting bookings
router.get("/bookings/:ownerid", controller.getBookings)

//Route for deleting bookings
router.delete("/bookings/delete/:bookingid", controller.deleteBooking)

module.exports = router