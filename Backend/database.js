const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Use your MySQL username
    password: '216Q1A4367@balu', // Use your MySQL password
    database: 'calendar_app'
});

db.connect(err => {
    if (err) {
        console.log("Database connection failed:", err);
    } else {
        console.log("Database connected.");
    }
});

module.exports = db;
