const express = require("express");
const router = express.Router();

//create new user by submitting a form
router.post("/", (req, res) => {
  res.send("Create new user");
});

module.exports = router;
