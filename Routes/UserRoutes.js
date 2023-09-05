const express = require("express");
const router = express.Router();
const { userJoin } = require("../Controller/UserController");

router.post("/join", userJoin);

module.exports = router;
