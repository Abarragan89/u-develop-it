const express = require('express');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001
const app = express();

// middleware to parse JSON
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Api routes (node automatically looks for index.js)
app.use('/api', apiRoutes);

// catch all for any bad requests
app.use((req, res) => {
    res.status(404).end();
});

// Start server afte DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});