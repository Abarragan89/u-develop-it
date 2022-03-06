const { urlencoded } = require('body-parser');
const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3000
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
// This is the way you make queries from Node
db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});

// catch all for any bad requests
app.use((req, res) => {
    res.status(404).end();
})

app.listen(PORT, () => console.log(`Server listening to on http://localhost:${PORT}`));
