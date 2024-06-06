var jwt = require("jsonwebtoken");
//const config = require("../config/auth.config.js");
const User = require("../models/user");
var bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
  const user = new User({
    fullname: req.body.fullname,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  });

  await user.save().then(
    (user) => {
      console.log("User was registered successfully!", user);
      res.send({ message: "User was registered successfully!" });
    },
    (err) => {
      res.status(500).send({ message: err });
      return;
    }
  );
};

exports.signin = async (req, res) => {
  await User.findOne({
    email: req.body.email,
  }).then((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }

    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send({ message: "Invalid Password!" });
    }

    const token = jwt.sign({ id: user.id }, config.secret, {
      algorithm: "HS256",
      allowInsecureKeySizes: true,
      expiresIn: 1800, // 30 minutes
    });

    req.session.token = token;

    res.status(200).send({
      id: user._id,
      fullname: user.fullname,
      email: user.email,
    });
  });
};

exports.signout = async (req, res) => {
  try {
    req.session = null;
    return res.status(200).send({ message: "You've been signed out!" });
  } catch (err) {
    this.next(err);
  }
};
