const express = require('express');
const router  = express.Router();
const databases = require("../public/scripts/database");

  router.get("/login", (req, res) => {
    res.render("loginpage");
  });
  router.post("/login", (req, res) => {
    console.log(req.body.username)
    res.cookie('User', req.body.username)
    res.redirect("/")
  });
module.exports = router;
