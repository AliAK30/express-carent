var router = require("express").Router();
const checkDuplicateEmail = require("../middlewares/checkDuplicateEmail");
const controller = require("../controllers/auth.controller");

router.post(
  "/signup",
  checkDuplicateEmail,
  controller.signup
);

router.post("/signin", controller.signin);

router.post("/signout", controller.signout);

module.exports = router;
