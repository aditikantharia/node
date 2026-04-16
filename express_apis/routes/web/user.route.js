const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../../controllers/user.controllers");
//register user
//second validation --use express validator package
router.post(
  "/register",
  [
    body("username")
      .isLength({ min: 5 })
      .withMessage("Username must be at least 5 characters long"),
    body("email").isEmail().withMessage("Invalid email address"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long"),
  ],
  userController.registerUser,
);
module.exports = router;
