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

const getAllItemsFront = function() {
  return pool
    .query(`
  SELECT *
  FROM items
  Where is_sold IS false AND is_deleted IS false
  LIMIT 3;`)
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
exports.getAllItemsFront = getAllItemsFront;

const getAllChats = function(userID) {
  return pool.query(`
  SELECT
  chats.id as chat_id,
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
  JOIN users as seller_users ON items.admin_id = seller_users.id
  WHERE chats.buyer_id = ${userID} OR items.admin_id = ${userID};
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


const getChatInfo = function(chatID) {
  return pool.query(`
  SELECT
  chats.id as chat_id,
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
  JOIN users as seller_users ON items.admin_id = seller_users.id
  WHERE chats.id = ${chatID};

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
exports.getChatInfo = getChatInfo;

const getAllMessages = function(chatID) {
  return pool.query(`
  Select * from messages
  Where chat_id = ${chatID}
  ORDER BY id;
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
exports.getAllMessages = getAllMessages;


const addMessage = function(chatId, message, senderId) {
  return pool.query(`
  INSERT INTO messages VALUES (DEFAULT, ${Number(chatId)}, $1, ${Number(senderId)})`,[message])
    .catch((err) => {
      console.log(err.message);
    });
};
exports.addMessage = addMessage;


const checkChatExists = function(itemID, userID) {
  return pool.query(`
  SELECT chats.* FROM chats
  JOIN items ON chats.item_id = items.id
  WHERE chats.item_id = $1 AND (chats.buyer_id = $2 OR items.admin_id = $2)
  `, [itemID, userID])
    .catch((err) => {
      console.log(err.message);
    });
};
exports.checkChatExists = checkChatExists;


const createChat = function(itemID, userID) {
  return pool.query(`
  INSERT INTO chats VALUES
  (DEFAULT, $1, $2) RETURNING *
  `, [itemID, userID])
    .catch((err) => {
      console.log(err.message);
    });
};
exports.createChat = createChat;

const addAnItem = function(item, userID) {
  console.log("admin id is",userID)
  return pool
    .query(`INSERT INTO items (name, description, image, price, is_sold, is_deleted, admin_id) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`, [item.title, item.description, item.file, item.price,false,false, userID ])
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
exports.addAnItem = addAnItem;

const getAnItem = function(id) {
  return pool
    .query(`SELECT id, name, description, image, price
  FROM items
  WHERE id=$1`, [id])
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
exports.getAnItem = getAnItem;


const getFavorites = function(userId) {
  return pool
    .query(`
    SELECT *
    FROM favourites
    Join items On items.id = item_id
    Where user_id = ${userId}
    AND is_deleted = false;`)
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

const getsearchItems = function(term) {
  return pool
    .query(`SELECT *
  FROM items
  WHERE lower(name) LIKE '%${term}%' AND is_sold IS false AND is_deleted IS false;`)
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
exports.getsearchItems = getsearchItems;

const getFilterItems = function(filter) {
  return pool
    .query(`  SELECT *
    FROM items
    Where is_sold IS false AND is_deleted IS false
    Order by price ${filter};`)
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
exports.getFilterItems = getFilterItems;

const addToFavourites = function(item) {
  return pool
    .query(`INSERT INTO favourites (item_id, user_id) VALUES($1, $2) RETURNING *`, [ item.item_id, item.user_id])
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
exports.addToFavourites = addToFavourites;

const getPostings = function(userId) {
  return pool
    .query(`  SELECT *
  FROM items
  Where admin_id = $1 AND is_deleted IS false;`, [userId])
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
exports.getPostings = getPostings;

const getUser = function(userID) {
  return pool
    .query(`SELECT * FROM users WHERE id = $1`, [userID])
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

exports.getUser = getUser;

const deleteItem = function(item) {
  return pool
    .query(`UPDATE items SET is_deleted = true WHERE id = $1 RETURNING *`, [item.admin_id])
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
exports.deleteItem = deleteItem;

const soldItem = function(id) {
  return pool
    .query(`UPDATE items SET is_sold = true WHERE id = $1`, [id])
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
exports.soldItem = soldItem;
