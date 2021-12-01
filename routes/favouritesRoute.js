
const express = require('express');
const router  = express.Router();
const databases = require("../public/scripts/database");
const cookieParser = require('cookie-parser');
router.use(cookieParser());


router.get("/favourites", (req, res) => {
  databases.getFavorites(req.cookies.User)
    .then(data => {
      const userID = Number(req.cookies.User);
      const items = data;
      const templevars = { items, userID };
      res.render("favorites",templevars);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});
module.exports = router;

