require("dotenv").config();
const { Pool } = require('pg');
const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME
});
pool.connect(() => {
  console.log("connected");

})
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
