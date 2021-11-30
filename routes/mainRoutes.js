
const express = require('express');
const router  = express.Router();
const databases = require("../public/scripts/database");

  router.get("/", (req, res) => {
    databases.getAllItems()
      .then(data => {
        const items = data;
        const templevars = { items }
        console.log(data);
        res.render("mainpage",templevars)
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
module.exports = router;

