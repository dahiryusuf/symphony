
const express = require('express');
const router  = express.Router();
const databases = require("../public/scripts/database");
const cookieParser = require('cookie-parser');
const { getUser } = require('../public/scripts/database');


router.use(cookieParser());



let search = 0;
let  searchTerm = 0;
let filterTerm = "";

router.get("/listings", (req, res) => {
  if (search === 1) {
    search = 0;
    databases.getsearchItems(searchTerm)
      .then(data => {
        const items = data;
        const userID = Number(req.cookies.User);

        getUser(userID).then((result) => {
          let user = null;
          if (result) {
            user = result[0];
          }
          const templevars = { items, user };
          res.render("listings-page",templevars);
        });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });

  }
  else if (search === 2) {
    search = 0;
    databases.getFilterItems(filterTerm)
      .then(data => {
        console.log("data is" , data);
        const items = data;
        const userID = Number(req.cookies.User);
        getUser(userID).then((result) => {
          let user = null;
          if (result) {
            user = result[0];
          }
          const templevars = { items, user };
          res.render("listings-page",templevars);
        });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });

  } else {
    databases.getAllItems()
      .then(data => {
        const items = data;
        const userID = Number(req.cookies.User);
        getUser(userID).then((result) => {
          let user = null;
          if (result) {
            user = result[0];
          }
          const templevars = { items, user };
          res.render("listings-page",templevars);
        });

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

