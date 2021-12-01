const express = require('express');
const router  = express.Router();
const databases = require("../public/scripts/database");
const cookieParser = require('cookie-parser');
router.use(cookieParser());

router.get("/login", (req, res) => {
  const userID = Number(req.cookies.User);
  const vars = {userID};
  res.render("loginpage", vars);
});
router.post("/login", (req, res) => {
  res.cookie('User', req.body.username);
  res.redirect("/");
});
module.exports = router;
