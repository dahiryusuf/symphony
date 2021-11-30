
const express = require('express');
const router  = express.Router();
const databases = require("../public/scripts/database");

let search = 0;

  router.get("/", (req, res) => {
    if(!search){
    databases.getAllItems()
      .then(data => {
        const items = data;
        const templevars = { items }
        res.render("mainpage",templevars)
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
    }
    else{
        databases.getsearchItems(searchTerm)
          .then(data => {
            const items = data;
            const templevars = { items }
            res.render("mainpage",templevars)
          })
          .catch(err => {
            res
              .status(500)
              .json({ error: err.message });
          });
    }
  });
  router.post("/", (req, res) => {
    console.log("check its working")
    searchTerm = req.body.search;
    search = 1;
    res.redirect("/")
  });
module.exports = router;

