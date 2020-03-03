const express = require("express");
const router = express.Router();

//auth has two routes :
// 1- get all profile
// 2- add to profile
// 3- update profile profile
// 4- delete section

router.get("/", (req, res) => {
  res.send("get all profile");
});

router.post("/", (req, res) => {
  res.send("add to profile");
});

router.put("/:id", (req, res) => {
  res.send("update profile");
});

router.delete("/:id", (req, res) => {
  res.send("delete profile");
});

module.exports = router;
