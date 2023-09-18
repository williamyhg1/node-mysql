const express = require('express');
const mysql = require('mysql');

// Create connection

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
})

//connect to MySQL
db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected')
})

const app = express();

//Create database
ap.get("/createdb",(req, res)=>{
    let sql = "CREATE DATABASE nodemysql";
    db.query(sql, err => {
        if(err) {
            throw err;
        }
        res.send("Database created");
    });
});