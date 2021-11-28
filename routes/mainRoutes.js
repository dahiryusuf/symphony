
const express = require('express');
const router  = express.Router();

module.exports = (db, database) => {
  router.get("/", (req, res) => {
   database.getAllItems()
      .then(data => {
        const items = data[0].rows;
        const templevars = { data: "car"}
        console.log(items)
        res.render("mainpage",templevars)
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
