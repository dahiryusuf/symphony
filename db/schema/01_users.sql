-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE items (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  description text,
  image VARCHAR(255) NOT NULL,
  price INTERGER NOT NULL,
  admin_id INTEGER
  is_sold boolean
  is_deleted
);
