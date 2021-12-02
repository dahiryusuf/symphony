const express = require('express');
const router  = express.Router();
const { getUser } = require('../public/scripts/database');



router.get('/register', (req, res) => {
  const userID = Number(req.cookies.User);
  getUser(userID).then((result) => {
    let user = null;
    if (result) {
      user = result[0];
    }
    const vars = {user};
    res.render('register.ejs', vars);

  });

});

module.exports = router;