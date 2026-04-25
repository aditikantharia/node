//chatbot -->static(rule based chatbot),Ai chatbot (gemini key),
const express = require("express");
const router = express.Router();
const chatController = require("../../controllers/chat.controller")
const userMiddleware = require("../../middlewares/user.middleware")

//rule based chatbot
router.post("/chat", chatController.StaticBot)

//Ai based chatbot
router.post("/chat/ai", userMiddleware.authenticateUser,
    chatController.AIBot)

module.exports = router;