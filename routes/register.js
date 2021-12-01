const express = require('express');
const router  = express.Router();


router.get('/register', (req, res) => {
  const userID = Number(req.cookies.User);
  const vars = {userID};
  res.render('register.ejs', vars);
});

module.exports = router;