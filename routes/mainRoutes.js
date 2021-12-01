
const express = require('express');
const router  = express.Router();
const databases = require("../public/scripts/database");
const cookieParser = require('cookie-parser');
router.use(cookieParser());
let search = 0;
let  searchTerm = 0;
let filterTerm = "";
router.get("/", (req, res) => {
  if (search === 1) {
    databases.getsearchItems(searchTerm)
      .then(data => {
        const items = data;
<<<<<<< HEAD
        const templevars = { items };
        res.render("mainpage",templevars);
=======
        const userID = Number(req.cookies.User);
        const templevars = { items, userID }
        res.render("mainpage",templevars)
>>>>>>> b67f72aad68a7f86754a34dc58c1465b7130923c
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
<<<<<<< HEAD
        const templevars = { items };
        res.render("mainpage",templevars);
=======
        const userID = Number(req.cookies.User);
        const templevars = { items, userID }
        res.render("mainpage",templevars)
>>>>>>> b67f72aad68a7f86754a34dc58c1465b7130923c
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
<<<<<<< HEAD
        const templevars = { items };
        res.render("mainpage",templevars);
=======
        const userID = Number(req.cookies.User);
        const templevars = { items, userID }
        res.render("mainpage",templevars)
>>>>>>> b67f72aad68a7f86754a34dc58c1465b7130923c
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

  res.redirect("/");
});
router.post("/filter", (req, res) => {
  search = 2;
  if (req.body.values == 0) {
    filterTerm = 'ASC';
  } else {
    filterTerm = 'DESC';
  }

  res.redirect("/");
});
module.exports = router;

