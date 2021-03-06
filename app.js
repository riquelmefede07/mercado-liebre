
const express = require('express');

const path = require('path');

const app = express();

const publicpath = path.join(__dirname, './public');

app.use(express.static(publicpath));

app.listen(process.env.PORT || 3000, function()  {
    console.log('Servidor corriendo en el puerto 3000');
});

//ruta del archivo home.html
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});

app.get('/brr', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});