

// Importing MySQL module 
const mysql = require("mysql2"); 
  
// Creating connection 
let db_connection = mysql.createConnection({ 
  host: "localhost", 
  user: "root", 
  password: "S!mpl312", 
  database: "contactus"
}); 
  
// Connect to MySQL server 
db_connection.connect((err) => { 
  if (err) { 
    console.log("Database Connection Failed !!!", err); 
  } else { 
    console.log("connected to Database"); 
  } 
}); 
  
module.exports = db_connection;
