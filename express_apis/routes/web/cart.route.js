const express = require("express");
const router = require("./chat.route");
const userMiddleware = require("../../middlewares/user.middleware")
const cartContoller = require("../../controllers/cart.controller")

//add items to cart
router.post("/add", userMiddleware.authenticateUser,
    cartContoller.AddToCart
)

// get add items to cart


//remove items to cart


module.exports = router