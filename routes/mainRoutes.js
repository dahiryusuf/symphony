
const express = require('express');
const router  = express.Router();
const databases = require("../public/scripts/database");
const cookieParser = require('cookie-parser');
router.use(cookieParser());
let search = 0;

router.get("/", (req, res) => {
  const userID = Number(req.cookies.User);
  if (!search) {
    databases.getAllItems()
      .then(data => {
        const items = data;
        const templevars = { items, userID };
        console.log(data);
        res.render("mainpage",templevars);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  } else {
    databases.getsearchItems(searchTerm)
      .then(data => {
        const items = data;
        const templevars = { items, userID };
        res.render("mainpage",templevars);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  }
});
router.post("/", (req, res) => {
  console.log("check its working");
  searchTerm = req.body.search;
  search = 1;
  res.redirect("/");
});
module.exports = router;

