const express = require("express");
const bodyParser = require("body-parser")

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


const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));
app.get("/contact.html", (req, res) => res.sendFile(__dirname + "/contact.html"));

app.post("/contactus", (req, res) => {

    let sql = `INSERT INTO contactus_messages (email, name, message) VALUES (?, ?, ?);`; 

    // Creating queries 
    db_connection.query(sql, [req.body.email, req.body.name, req.body.message], (err, rows) => { 
        if (err) throw err; 
        console.log("Row inserted with id = "
            + rows.insertId); 
    }); 

    res.redirect('/');
    // res.send(`Thanks ${req.body.name}! We got your message!`);
});

const port = 8080;
app.listen(port, () => console.log(`server is running on port ${port}`));
