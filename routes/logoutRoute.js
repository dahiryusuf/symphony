const express = require('express');
const router  = express.Router();


router.post('/logout', (req, res) => {
  res.cookie('User', null);
  res.redirect('/');
});

module.exports = router;