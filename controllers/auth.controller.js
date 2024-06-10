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

exports.signin = async (req, res, next) => {
  
  await User.findOne({
    email: req.body.email,
  }).then((user) => {
    

    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }

    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send({ message: "Invalid Password!" });
    }

    const token = jwt.sign({ id: user.id }, process.env.secret, {
      algorithm: "HS256",
      allowInsecureKeySizes: true,
      expiresIn: 86400, // 30 minutes
    });

    const obj = {token: token, id: user._id}

  

    res.cookies.set('carent-session-token', JSON.stringify(obj), {
      httpOnly: false,
      maxAge: 24 * 60 * 60 * 1000 //24 hours
    })

    
    res.status(200).send({
      id: user._id,
      fullname: user.fullname,
      email: user.email,
    });
    

  }, (err) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
  });
};

exports.signout = async (req, res) => {
  try {
    res.cookies.set('carent-session-token')
    return res.status(200).send({ message: "You've been signed out!" });
  } catch (err) {
    this.next(err);
  }
};
