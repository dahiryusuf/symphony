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
      console.log(result.rows);
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
  items.admin_id as seller,
  users.first_name as buyer_name,
  seller_users.first_name as seller_name
  FROM chats
  JOIN items ON chats.item_id = items.id
  JOIN users ON chats.buyer_id = users.id
  JOIN users as seller_users ON items.admin_id = seller_users.id;

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

//Post an item
const addAnItem = function(item) {
  return pool
    .query(`INSERT INTO items (name, description, image, price) VALUES($1, $2, $3, $4) RETURNING *`, [item.title, item.description, item.file, item.price])
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
exports.addAnItem = addAnItem;

const getAnItem = function(id) {
  return pool
    .query(`SELECT name, description, image, price
  FROM items
  WHERE id=$1`, [id])
    .then((result) => {
      //console.log(result.rows);
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
exports.getAnItem = getAnItem;


const getFavorites = function(userId) {
  return pool
    .query(`
    SELECT *
    FROM favourites
    Join items On items.id = item_id
    Where user_id = ${userId};`)
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
exports.getFavorites = getFavorites;
