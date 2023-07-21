const Task = require("../models/task");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const PasswordHasher = require("../services/PasswordHasher");

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    res.status(400).send("User Already Exists");
    return;
  }

  let user = await new User({ name, email, password }).save();

  // generate json web token

  const jwtUser = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.JWT_KEY,
    {
      expiresIn: "2h",
    }
  );

  // store it on session object

  const session = {
    jwt: jwtUser,
  };

  res.status(201).send({ user, session });
};

exports.signin = async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (!existingUser) {
    throw new BadRequestError("Please Provide a valid email");
  }

  const matchPassword = await PasswordHasher.compare(
    existingUser.password,
    password
  );

  if (!matchPassword) {
    throw new BadRequestError("Invalid Password");
  }

  const jwtUser = jwt.sign(
    {
      id: existingUser.id,
      email: existingUser.email,
    },
    process.env.JWT_KEY,
    {
      expiresIn: "2h",
    }
  );

  // store it on session object

  const session = {
    jwt: jwtUser,
  };

  res.status(201).send({ user: jwt.decode(jwtUser), session });
};

exports.signout = (req, res) => {
  req.headers.token = null;
  res.send({});
};
