var express = require("express");
var router = express.Router();

/* GET home page. */
router.use("/ali", (req, res, next) => {
  console.log("Logged");
  next();
});

router.get("/ali", function (req, res, next) {
  res.send("ali");
});

router.get("/", function (req, res, next) {
  res.send("you are on index");
});

module.exports = router;
