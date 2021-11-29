
const express = require('express');
const router  = express.Router();

module.exports = (db, database) => {
  router.get("/", (req, res) => {
    db.query(`
    SELECT *
    FROM items
    Where is_sold IS false AND is_deleted IS false;`)
      .then(data => {
        const items = data.rows;
        const templevars = { items }
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
