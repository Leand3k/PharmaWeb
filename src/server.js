// server.js
const bodyParser = require("body-parser");
const express = require("express");
require("dotenv").config();
const app = express();
app.use(bodyParser.json());
// app.use(express.json());

var mysql = require("mysql");
//connection to server in RDS.
const connection = mysql.createConnection({
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  database: process.env.RDS_DATABASE,
  port: process.env.RDS_PORT,
});

connection.connect(function (err) {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }

  console.log("Connected to database.");
});

// const pool = mysql.createPool(connection);
// module.exports = pool;

// connection.end();

module.exports = connection;
