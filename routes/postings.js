const express = require('express');
const router  = express.Router();
const databases = require("../public/scripts/database");
const cookieParser = require('cookie-parser');
router.use(cookieParser());
const { getUser } = require('../public/scripts/database');
let search = 0;
let searchTerm = 0;



router.get("/mypostings", (req, res) => {
  if(!search){
    search = 0;
  databases.getPostings(req.cookies.User)
    .then(data => {
      const items = data;
      const userID = Number(req.cookies.User);
      getUser(userID).then((result) => {
        let user = null;
        if (result) {
          user = result[0];
        }
        const templevars = { items, user };
        res.render("postings",templevars);
      });


    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });

  } else {
    search = 0;
      databases.getsearchItems(searchTerm)
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
            res.render("postings",templevars);
          });
        })
        .catch(err => {
          res
            .status(500)
            .json({ error: err.message });
        });

    }

});
router.post("/sold/:id", (req, res) => {
  databases.soldItem(req.params.id);
  res.redirect("/mypostings");
});
router.post("/searchpost", (req, res) => {
  searchTerm = req.body.searchs;
  search = 1;

  res.redirect("/mypostings");
});

module.exports = router;
