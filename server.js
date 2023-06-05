const express = require('express');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'starbucksClone'
});

const app = express();

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database!');
});

app.get('/data', (req, res) => {
    const query = 'SELECT * FROM users';

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ error: 'Error executing MySQL query' });
            return;
        }

        res.json(results);
    });
});

const port = 3001; // Choose any port number you prefer

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
