const express = require('express');
const db = require('./database');

const app = express();
app.use(express.json());

// Routes for getting and adding companies
app.get('/companies', (req, res) => {
    const query = 'SELECT * FROM companies';
    db.query(query, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
});

app.post('/companies', (req, res) => {
    const { name, location, linkedin, email, phone, comments, communication_periodicity } = req.body;
    const query = 'INSERT INTO companies (name, location, linkedin, email, phone, comments, communication_periodicity) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [name, location, linkedin, email, phone, comments, communication_periodicity], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).json({ id: result.insertId, name });
        }
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
