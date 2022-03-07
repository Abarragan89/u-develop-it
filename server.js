const { urlencoded } = require('body-parser');
const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001
const app = express();
// middleware to parse JSON
app.use(urlencoded({ extended: false }));
app.use(express.json());
// connection to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'anthony',
        password: 'root',
        database: 'election'
    },
    console.log('Connected to the election database.')
);
// Select all candidates and candidate information
db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});

// Get a single candidate
db.query(`SELECT * FROM candidates WHERE id = 7`, (err, row) => {
    if (err) {
        console.log(err);
    }
    console.log(row);
});

// Delete a candidate
    // example of a prepared statement (i.e. variable)
db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
});

// create a candidate
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)VALUES (?,?,?,?)`;
const params = [1, 'Ronald', 'Firbank', 1];
db.query(sql, params, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
});


// catch all for any bad requests
app.use((req, res) => {
    res.status(404).end();
})

app.listen(PORT, () => console.log(`Server listening to on http://localhost:${PORT}`));
