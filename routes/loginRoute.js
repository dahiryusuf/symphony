const express = require('express');
const router  = express.Router();
const databases = require("../public/scripts/database");


  router.get("/login", (req, res) => {
    res.render("loginpage");
  });
  router.post("/login", (req, res) => {
    res.cookie('User', req.body.username)
    res.redirect("/")
  });
module.exports = router;
