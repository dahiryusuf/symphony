const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/post", (req, res) => {
    res.render("create-post");
  });
  router.post("/post", (req, res) => {
    console.log(req.body);
    //https://api.cloudinary.com/v1_1/demo/image/upload
    //.post("https://api.cloudinary.com/v1_1/demo/image/upload")
    res.redirect("my-item");
  });
  router.get("/my-item", (req, res) => {
    res.render("item-display");
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
