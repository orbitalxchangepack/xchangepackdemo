const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

router.get("/init", async (req, res) => {
  const token = req.query.token;
  let user = null;
  let response;

  try {
    const userData = jwt.verify(token, "app");
    user = await User.findById(userData.userId);
  } catch (e) {
    response = null;
  }

  if (user) {
    response = user;
  }

  res.send({ user: response });
});

router.post("/register", async (req, res) => {
  const userExists = await User.find({ email: req.body.email });
  if (userExists) {
    return res.status(400).send({
      message: "User with this email already exists"
    });
  }

  const newUser = User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role: "user"
  });

  await newUser.save();
  return res.sendStatus(201);
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    res.status(404).send({
      message: "User with this email does not exist"
    });
    return;
  }

  const isEqual = await bcrypt.compare(req.body.password, user.password);
  if (!isEqual) {
    res.status(401).send({
      message: "Wrong password! Try again!"
    });
    return;
  }

  const token = jwt.sign({ userId: user._id }, "app");
  res.send({
    token,
    user
  });
});

module.exports = router;
