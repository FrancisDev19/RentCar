// Inicializaciones
const express = require('express');
const app = express();
const path = require("path");

// Middlewares

// Routes
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname + '/about.html'));
});

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

//Server
app.listen(3000, () => {
    console.log(`Server ready on port 3000`);
});