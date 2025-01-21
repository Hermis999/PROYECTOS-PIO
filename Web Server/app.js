const http = require('http');

http.createServer((req, res) => {
    //res.write("hello world");
    res.setHeader('Content-Disposition', 'attachment; filename=usuarios.csv')
    res.writeHead(200, {'content-Type': 'aplication/csv'});
        /*const usuarios = {
            id: 1,
            name: "Maria"
        }*/
    //res.write(JSON.stringify(usuarios));
    res.write("id, nombre, apellido\n");
    res.write("1, Maria, Perez");
    res.write("2, Juan, Lopez");
    res.write("3, Pedro, Gomez");

    res.end();
}).listen(8080);

console.log("escuchando en el puerto: http://localhost:8080");