const { urlencoded } = require('body-parser');
const express = require('express');

const PORT = process.env.PORT || 3000
const app = express();
// middleware to parse JSON
app.use(urlencoded({ extended: false }));
app.use(express.json());



// catch all for any bad requests
app.use((req, res) => {
    res.status(404).end();
})

app.listen(PORT, () => console.log(`Server listening to on http://localhost:${PORT}`));
