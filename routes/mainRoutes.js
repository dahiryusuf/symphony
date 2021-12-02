
const express = require('express');
const router  = express.Router();
const databases = require("../public/scripts/database");
const cookieParser = require('cookie-parser');
router.use(cookieParser());
let search = 0;
let  searchTerm = 0;
let filterTerm = "";
router.get("/listings", (req, res) => {
  if (search === 1) {
    databases.getsearchItems(searchTerm)
      .then(data => {
        const items = data;
        const userID = Number(req.cookies.User);
        const templevars = { items, userID };
        res.render("listings-page",templevars);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
    search = 0;
  }
  if (search === 2) {
    databases.getFilterItems(filterTerm)
      .then(data => {
        console.log("data is" , data);
        const items = data;
        const userID = Number(req.cookies.User);
        const templevars = { items, userID };
        res.render("listings-page",templevars);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
    search = 0;
  } else {
    databases.getAllItems()
      .then(data => {
        const items = data;
        const userID = Number(req.cookies.User);
        const templevars = { items, userID };
        res.render("listings-page",templevars);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  }
});
router.post("/", (req, res) => {
  searchTerm = req.body.search;
  search = 1;

  res.redirect("/listings");
});
router.post("/filter", (req, res) => {
  search = 2;
  if (req.body.values == 0) {
    filterTerm = 'ASC';
  } else {
    filterTerm = 'DESC';
  }

  res.redirect("/listings");
});
module.exports = router;

