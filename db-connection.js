const mysql = require("mysql");

const db_connection = mysql
  .createConnection({
    host: "localhost", 
    user: "root", 
    password: "password", 
    database: "crud"
})
  .on("error", (err) => {
    console.log("Failed to connect to Database - ", err);
  });

module.exports = db_connection;