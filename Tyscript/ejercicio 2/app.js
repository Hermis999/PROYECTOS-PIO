// Definición de los datos
var tiendas = [
    {
        id: 1,
        nombre: "San Juan",
        categorias: [
            {
                nombre: "Electrónica",
                productos: [
                    { nombre: "TV", precio: 1299.99, stock: 16, estado: true },
                    { nombre: "Radio", precio: 66.99, stock: 32, estado: true },
                    { nombre: "Teléfono", precio: 732.99, stock: 19, estado: false },
                ],
            },
            {
                nombre: "Ropa",
                productos: [
                    { nombre: "Camiseta", precio: 22.99, stock: 48, estado: true },
                    { nombre: "Pantalón", precio: 15.99, stock: 34, estado: true },
                    { nombre: "Zapatos", precio: 81.99, stock: 29, estado: false },
                ],
            },
        ],
    },
    {
        id: 2,
        nombre: "Santa Marta",
        categorias: [
            {
                nombre: "Electrónica",
                productos: [
                    { nombre: "TV", precio: 1699.99, stock: 12, estado: true },
                    { nombre: "Radio", precio: 59.99, stock: 20, estado: true },
                    { nombre: "Teléfono", precio: 799.99, stock: 12, estado: true },
                ],
            },
            {
                nombre: "Ropa",
                productos: [
                    { nombre: "Camiseta", precio: 14.99, stock: 60, estado: true },
                    { nombre: "Pantalón", precio: 49.99, stock: 25, estado: false },
                    { nombre: "Zapatos", precio: 99.99, stock: 15, estado: true },
                ],
            },
        ],
    },
];
function mostrarProductos() {
    tiendas.forEach(function (tienda) {
        tienda.categorias.forEach(function (categoria) {
            categoria.productos.forEach(function (producto) {
                console.log("                             ");
                console.log("Producto: ".concat(producto.nombre));
                console.log("Tienda: ".concat(tienda.nombre));
                console.log("Precio: ".concat(producto.precio.toFixed(2), " Pesos"));
                console.log("Stock: ".concat(producto.stock));
                console.log("                             ");
            });
        });
    });
}
// Función para buscar productos
function buscarProducto(nombreProducto) {
    var encontrado = false;
    tiendas.forEach(function (tienda) {
        tienda.categorias.forEach(function (categoria) {
            categoria.productos.forEach(function (producto) {
                if (producto.nombre.toLowerCase() === nombreProducto.toLowerCase() && producto.estado) {
                    console.log("                             ");
                    console.log("Producto: ".concat(producto.nombre));
                    console.log("Tienda: ".concat(tienda.nombre));
                    console.log("Precio: ".concat(producto.precio.toFixed(2), " Pesos"));
                    console.log("Stock: ".concat(producto.stock));
                    console.log("                             ");
                    encontrado = true;
                }
            });
        });
    });
    if (!encontrado) {
        console.log("Producto fue encontrado o no esta disponible por ahora.");
    }
}
console.log("///------------------PRODUCTOS DEL MERCADO----------------///");
mostrarProductos();
console.log("///-------------------------------------------------------///");
console.log("///--------------------PRODUCTO BUSCADO-------------------///");
// Llamada a la función
buscarProducto("Camiseta"); // Cambiar el nombre para buscar otros productos
console.log("///-------------------------------------------------------///");
