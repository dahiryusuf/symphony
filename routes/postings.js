const express = require('express');
const router  = express.Router();
const databases = require("../public/scripts/database");
const cookieParser = require('cookie-parser');
router.use(cookieParser());
const { getUser } = require('../public/scripts/database');





router.get("/mypostings", (req, res) => {
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

});
router.post("/sold/:id", (req, res) => {
  databases.soldItem(req.params.id);
  res.redirect("/mypostings");
});

module.exports = router;
