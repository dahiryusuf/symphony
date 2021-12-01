const express = require('express');
const router  = express.Router();
const cookieParser = require('cookie-parser');
router.use(cookieParser());
const { getAllChats, getAllMessages, getChatInfo } = require('../public/scripts/database');


//displaty individual chat
router.get('/messages/:id', (req, res) => {
  const chatId = req.params.id;
  const chatPromise = getChatInfo(chatId);
  const messagesPromise = getAllMessages(chatId);
  Promise.all([chatPromise, messagesPromise])
    .then((responses) => {
      const chatResponse = responses[0][0];
      const messages = responses[1];
      console.log(messages);
      const userID = Number(req.cookies.User);
      const chat = chatResponse;
      const vars = {userID, chat, messages};
      console.log('this is the current user: ', userID);
      res.render('conversation.ejs', vars);
  
    });
});

//display chats for user
router.get('/messages', (req, res) => {
  getAllChats(req.cookies.User).then((chats) => {
    console.log(chats);
    const vars = {chats, userID: req.cookies.User};
    res.render('messages.ejs', vars);
  });
  
});




module.exports = router;