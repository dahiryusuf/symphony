const express = require('express');
const router  = express.Router();
const  {deleteItem} = require('../public/scripts/database');

module.exports = (db) => {

  router.post("/delete/:id", async(req, res) => {

    console.log(req.params.id);
    if (!req.params.id) {
      console.log('error');
      return null;
    }
    console.log(req.cookies.user);
    let item = {
      admin_id: req.params.id
    };
    let result = await deleteItem(item);
    res.redirect("/mypostings");
  });

  return router;
};
