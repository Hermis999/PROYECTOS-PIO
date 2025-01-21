const { Pool } = require('pg');

// Configura los parámetros de tu base de datos
const conexp = new Pool({
  user: 'postgres',          // Usuario de PostgreSQL
  host: 'localhost',           // Dirección del servidor
  database: 'PruebaG7',   // Nombre de la base de datos
  password: 'laura1006427861',   // Contraseña del usuario
  port: 5432                  // Puerto de conexión(por defecto es 5432)
});

conexP.connect((err, client, release) => {
    if (err) {
        return console.error('Error al conectar a la base de datos:', err.stack);
    }
    console.log('Conectado a la base de datos PostgreSQL');
    release(); // Libera el cliente cuando no se usa
});