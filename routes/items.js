const express = require('express');
const router  = express.Router();
const {addAnItem} = require('../public/scripts/database')
const {getAnItem} = require('../public/scripts/database')

module.exports = (db) => {
  router.get("/post", (req, res) => {
    res.render("create-post");
  });

  router.post("/post", async (req, res) => {
    //console.log(req.body);
    let item = {
      title: req.body.title, 
      description: req.body.description, 
      file: req.body.file,
      price: req.body.price
    }
    let result = await addAnItem(item)
    res.redirect(`my-item/${result[0].id}`);
  });

  router.get("/my-item/:id", async (req, res) => {
    //console.log(req.params);
    if (!req.params.id) {
      console.log('error');
      return null;
    }
    let result = await getAnItem(req.params.id);
    let result1 = result[0]; 
    //console.log(result);
    res.render("item-display", result1);
  });

  router.get("/", (req, res) => {
    // db.query(`SELECT * FROM users;`)
    //   .then(data => {
    //     const users = data.rows;
    //     res.json({ users });
    //   })
    //   .catch(err => {
    //     res
    //       .status(500)
    //       .json({ error: err.message });
    //   });
  });
  return router;
};
