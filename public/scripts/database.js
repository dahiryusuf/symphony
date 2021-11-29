require("dotenv").config();
const { Pool } = require('pg');
const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME
});

const getAllItems = function() {
  return pool
  .query(`
  SELECT *
  FROM items
  Where is_sold IS false AND is_deleted IS false;`)
    .then((result) => {
      if (!result.rows) {
        return null;
      }
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
      return null;
    });
};
exports.getAllItems = getAllItems;
<<<<<<< HEAD
=======

const getAllChats = function(userID = 1) {
  return pool.query(`
  SELECT 
  items.name as item,
  items.image as image,
  items.price as price,
  chats.buyer_id as buyer,
  items.admin_id as seller
  FROM chats
  JOIN items ON chats.item_id = items.id;
  
  `)
    .then((result) => {
      console.log(result.rows);
      if (!result.rows) {
        return null;
      }
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
      return null;
    });
};
exports.getAllChats = getAllChats;
>>>>>>> 559eb8015ba77004ac9a483d523dac36be806e9d
