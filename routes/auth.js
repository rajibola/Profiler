const express = require("express");
const router = express.Router();

//auth has two routes :
// 1- get logged in user
// 2- login user and get token

router.get("/", (req, res) => {
  res.send("Get logged in user");
});

router.post("/", (req, res) => {
  res.send("authenticate user and get token");
});

module.exports = router;
