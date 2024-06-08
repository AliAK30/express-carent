var router = require("express").Router();
const controller = require("../controllers/user.controller");


router.post("/car/add", controller.addCar)