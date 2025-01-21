const mongoose = require('mongoose');

const dbPassword = 'mongoDB';
const dbName = 'miTienda'; // Si la base de datos no existe mongoDB la va a crear
const uri = `mongodb+srv://hermis:${dbPassword}@cluster0.djwrv.mongodb.net/${dbName}?retryWrites=true&w=majority`;



mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Conectado a MongoDB Atlas'))
  .catch((error) => console.error('Error de conexión a MongoDB', error));