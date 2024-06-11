var router = require("express").Router();
const controller = require("../controllers/index.controller");

//Route to get all cars without signing in
router.get("/cars", controller.getAllCars)


//Route to get specific car without signing in
router.get("/car/:id", controller.getCar)



module.exports = router