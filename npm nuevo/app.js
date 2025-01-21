const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const userRoutes = require('./routes/userRoutes');
const mortyRoutes = require('./routes/mortyRoutes');

require('./config/db');
require('./config/dbPostgre');

// Configurar middleware 
app.use(bodyParser.urlencoded({ extended: true}));
app.set('view engine', 'ejs');

// rutas
app.use('/', userRoutes);

//ruta postgreSQL
app.use('/post', postRoutes);

// ruta Morty
app.use('/morty', mortyRoutes);

app.use(express.static('public'));

// Puerto de la aplicación
app.listen(3000, ()=> {
    console.log('Servidor corriendo en http://localhost:3000');
})