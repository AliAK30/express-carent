var router = require("express").Router();
const controller = require("../controllers/user.controller");
const verifyToken = require("../middlewares/verifyJwt")


router.post("/car/add", verifyToken, controller.addCar)

module.exports = router