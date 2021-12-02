const express = require('express');
const router  = express.Router();
const databases = require("../public/scripts/database");
const cookieParser = require('cookie-parser');
router.use(cookieParser());
const { getUser } = require('../public/scripts/database');


router.get("/login", (req, res) => {
  const userID = Number(req.cookies.User);

  getUser(userID).then((result) => {
    let user = null;
    if (result) {
      user = result[0];
    }
    const vars = {user};
    res.render("loginpage", vars);

  });

});
router.post("/login", (req, res) => {
  res.cookie('User', req.body.username);
  res.redirect("/");
});
module.exports = router;
