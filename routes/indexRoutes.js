const express = require('express');
const router  = express.Router();
const cookieParser = require('cookie-parser');
router.use(cookieParser());
const {getUser} = require('../public/scripts/database');

router.get('/', (req, res) => {
  const userID = Number(req.cookies.User);
  getUser(userID).then((result) => {
    let user = null;
    if (result) {
      user = result[0];
    }
    const vars = { user };
    res.render('index.ejs', vars);
  });
});




module.exports = router;