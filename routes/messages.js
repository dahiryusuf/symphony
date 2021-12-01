const express = require('express');
const router  = express.Router();
const cookieParser = require('cookie-parser');
router.use(cookieParser());
const { createChat, checkChatExists, addMessage, getAllChats, getAllMessages, getChatInfo } = require('../public/scripts/database');


//displaty individual chat
router.post('/messages/:chatId/:senderId', (req, res) => {
  console.log('these are the params: ',req.params);
  console.log('these are the body: ', req.body);
  addMessage(req.params.chatId, req.body.message, req.params.senderId).then(() => {
    res.redirect(`/messages/${req.params.chatId}`);
  });
});

router.post('/chat/create/:itemID', (req, res) => {
  const userID = Number(req.cookies.User);
  const itemID = Number(req.params.itemID);
  checkChatExists(itemID, userID).then((results) => {
    let chatID = results.rows[0].id;
    if (!chatID) {
      createChat(itemID, userID);
      res.redirect(`/messages/${chatID}`);
    } else {
      res.redirect(`/messages/${chatID}`);
    }
   
  });
  
});

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
      res.render('conversation.ejs', vars);
  
    });
});

//display chats for user
router.get('/messages', (req, res) => {
  const userID = Number(req.cookies.User);
  if (!userID) {
    res.redirect('/login');
    return;
  }
  getAllChats(req.cookies.User).then((chats) => {
    console.log('this is the chats',chats);
    const vars = {chats, userID};
    res.render('messages.ejs', vars);
  });
  
});




module.exports = router;