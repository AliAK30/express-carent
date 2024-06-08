var router = require("express").Router();
const controller = require("../controllers/user.controller");
const multer  = require('multer')

const upload = multer({ dest: '../public/images/' })

router.post("/car/add", upload.array("images", 6), controller.addCar)