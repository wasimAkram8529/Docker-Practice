const express = require('express')
const mysql = require('mysql2')

const app = express();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})

app.get("/", (req, res) => {
  res.send("Backend is Runnig!");
});


const start = () => {
  db.connect((err) => {
    if (err) {
      console.error("MySQL connection failed:", err.message);
      process.exit(1); 
    }

    console.log("MySQL connected");

    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  });
};


start()