const express = require("express");
const router = express.Router();

// middlewares
const { authCheck } = require("../middlewares/auth");

// controller
const {
  signup,
  signin,
  signout,
} = require("../controllers/user");

// routes
router.post("/signup", signup);
router.post("/signin", signin);
router.post("/signout", authCheck, signout);

module.exports = router;