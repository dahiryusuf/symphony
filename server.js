// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const app = express();
const morgan = require("morgan");
const cloudinary = require("cloudinary");
// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const database = require("./public/scripts/database");
const db = new Pool(dbParams);
db.connect();

//Configure cloudinary media storage
cloudinary.config({
  cloud_name: 'dtx8hllui',
  api_key: '835956466622922',
  api_secret: process.env.CLOUDINARY_SECRET
});
// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);

app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own

const mainRoutes = require("./routes/mainRoutes");
const loginRoutes = require("./routes/loginRoute");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own


const itemsRoutes = require("./routes/items");
const messagesRouter = require('./routes/messages');
const favourites = require("./routes/favouritesRoute");
const postings = require("./routes/postings");
const registerRoutes = require("./routes/register");
const logoutRoutes = require("./routes/logoutRoute");
const indexRoutes = require("./routes/indexRoutes");
const deleteItem = require('./routes/delete');

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/", mainRoutes);
app.use("/", itemsRoutes(db));
app.use('/', messagesRouter);
app.use('/', registerRoutes);
app.use("/", loginRoutes);
app.use("/", favourites);
app.use("/", logoutRoutes);
app.use("/", indexRoutes);
app.use("/", postings);
app.use('/', deleteItem(db));


// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

// app.get("/", (req, res) => {
//   res.render("mainpage");
// });




app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
