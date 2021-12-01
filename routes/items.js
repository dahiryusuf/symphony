const express = require('express');
const router  = express.Router();
const {addAnItem} = require('../public/scripts/database');
const {getAnItem} = require('../public/scripts/database');
const {getUser} = require('../public/scripts/database');



module.exports = (db) => {
  router.get("/items/post", (req, res) => {
    const userID = Number(req.cookies.User);
    //console.log("HERE")
    const vars = {userID};
    res.render("create-post", vars);
  });

  router.post("/items/post", async(req, res) => {
    console.log(req.body);
    let item = {
      title: req.body.title,
      description: req.body.description,
      file: req.body.image,
      price: req.body.price
    };
    let result = await addAnItem(item);
    res.redirect(`my-item/${result[0].id}`);
  });

  router.get("/items/my-item/:id", async(req, res) => {
    //console.log(req.params);
    if (!req.params.id) {
      console.log('error');
      return null;
    }
    const userID = Number(req.cookies.User);
    let result = await getAnItem(req.params.id);
    let result1 = result[0];
    let user = await getUser(userID);
    let vars = {result1, userID, user};
    console.log(vars);
    res.render("item-display", vars);
  });

  return router;
};
