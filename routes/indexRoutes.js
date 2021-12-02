const express = require('express');
const router  = express.Router();
const cookieParser = require('cookie-parser');
router.use(cookieParser());
const { getUser } = require('../public/scripts/database');
const databases = require("../public/scripts/database");


router.get('/', (req, res) => {
  databases.getAllItemsFront()
    .then(data => {
      const items = data;
      const userID = Number(req.cookies.User);
      getUser(userID).then((result) => {
        let user = null;
        if (result) {
          user = result[0];
        }
        const vars = { items, user };
        res.render('index.ejs', vars);
      });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });

});

module.exports = router;
