const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('How much wood could a wood-chuck chuck, if a wood-chuck could chuck wood?'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
