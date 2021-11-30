const express = require('express');
const router  = express.Router();
const { getAllChats } = require('../public/scripts/database');

router.get('/messages', (req, res) => {
  getAllChats().then((chats) => {
    const vars = {chats};
    res.render('messages.ejs', vars);
  });
  
});

module.exports = router;