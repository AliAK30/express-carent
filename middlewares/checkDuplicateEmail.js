const User = require("../models/user");

checkDuplicateEmail = async (req, res, next) => {
  // Email
  await User.findOne({
    email: req.body.email,
  }).then(
    (user) => {
      if (user) {
        console.log("user already exists");
        res.status(400).send({ message: "user exists already" });
        return;
      }
      next()
    },
    (err) => {
      console.log(err);
      res.status(500).send({ message: err });
      return;
    }
  );

};

module.exports = checkDuplicateEmail;
