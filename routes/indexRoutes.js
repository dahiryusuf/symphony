const express = require('express');
const router  = express.Router();
const cookieParser = require('cookie-parser');
router.use(cookieParser());
const databases = require("../public/scripts/database");
//const {} = require('../public/scripts/database');

router.get('/', (req, res) => {
  databases.getAllItemsFront()
  .then(data => {
    const items = data;
    const userID = Number(req.cookies.User);
    const vars = { items, userID };
    res.render("index",vars);
  })
  .catch(err => {
    res
      .status(500)
      .json({ error: err.message });
  });

});




module.exports = router;
