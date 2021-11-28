const { Pool } = require('pg');
console.log(process.env.DB_USER, process.env.DB_PASS,process.env.DB_HOST,process.env.DB_NAME);
const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME
});

const getAllItems = function(sold = false, deleted = false) {
  return pool.query(`SELECT * from items;`)
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
getAllItems();
exports.getAllItems = getAllItems;