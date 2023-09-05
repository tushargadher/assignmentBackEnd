const express = require("express");
const router = express.Router();
const {
  sendMessage,
  getAllMessage,
} = require("../Controller/MessageController");

//send message api
router.post("/send", sendMessage);

//get all message api
router.get("/getAll", getAllMessage);
module.exports = router;
