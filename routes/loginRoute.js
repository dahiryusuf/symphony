const express = require('express');
const router  = express.Router();
const databases = require("../public/scripts/database");

  router.get("/login", (req, res) => {
    res.render("loginpage");
  });
module.exports = router;
