const express = require('express');
const router  = express.Router();
const cookieParser = require('cookie-parser');
router.use(cookieParser());
const { getUser, createChat, checkChatExists, addMessage, getAllChats, getAllMessages, getChatInfo } = require('../public/scripts/database');

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
    if (results.rows.length === 0) {
      createChat(itemID, userID).then((results) => {
        console.log(results);
        let chatID = results.rows[0].id;
        res.redirect(`/messages/${chatID}`);
      });

    } else {
      let chatID = results.rows[0].id;
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
      const chat = chatResponse;
      console.log(messages);
      const userID = Number(req.cookies.User);

      getUser(userID).then((result) => {
        let user = null;
        if (result) {
          user = result[0];
        }
        const vars = {user, chat, messages};
        res.render('conversation.ejs', vars);
      });

    });
});

//display chats for user
router.get('/messages', (req, res) => {
  const userID = Number(req.cookies.User);
  getAllChats(req.cookies.User).then((chats) => {

    getUser(userID).then((result) => {
      let user = null;
      if (result) {
        user = result[0];
      }
      const vars = {chats, user};
      res.render('messages.ejs', vars);
    });

  });
  
});

module.exports = router;