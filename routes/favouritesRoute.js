
const express = require('express');
const router  = express.Router();
const databases = require("../public/scripts/database");
const cookieParser = require('cookie-parser')
router.use(cookieParser())


  router.get("/favourites", (req, res) => {
    console.log(`req.body is ${req.cookies.User}` );
    databases.getFavorites(req.cookies.User)
      .then(data => {
        const items = data;
        const templevars = { items }
        res.render("favorites",templevars)
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
module.exports = router;

