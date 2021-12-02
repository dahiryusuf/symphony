const express = require('express');
const router  = express.Router();
const cookieParser = require('cookie-parser');
router.use(cookieParser());
//const {} = require('../public/scripts/database');

router.get('/', (req, res) => {
  const userID = Number(req.cookies.User);
  const vars = {userID};
  res.render('index.ejs', vars);

});




module.exports = router;