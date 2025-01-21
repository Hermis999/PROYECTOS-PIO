
type Producto = {
    nombre: string,
    precio: number,
    stock: number,
    estado: boolean
};

type Categoria = {
    nombre: string,
    productos: Producto[]
};

type Tienda = {
    id: number,
    nombre: string,
    categorias: Categoria[]
};

// Definición de los datos
const tiendas: Tienda[] = [
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

function mostrarProductos(): void {
    tiendas.forEach(tienda => {
        tienda.categorias.forEach(categoria => {
            categoria.productos.forEach(producto => {
                console.log(`                             `);
                console.log(`Producto: ${producto.nombre}`);
                console.log(`Tienda: ${tienda.nombre}`);
                console.log(`Precio: ${producto.precio.toFixed(2)} Pesos`);
                console.log(`Stock: ${producto.stock}`);
                console.log(`                             `);
            });
        });
    });
}

// Función para buscar productos
function buscarProducto(nombreProducto: string): void {
    let encontrado = false;

    tiendas.forEach(tienda => {
        tienda.categorias.forEach(categoria => {
            categoria.productos.forEach(producto => {
                if (producto.nombre.toLowerCase() === nombreProducto.toLowerCase() && producto.estado) {
                    console.log(`                             `);
                    console.log(`Producto: ${producto.nombre}`);
                    console.log(`Tienda: ${tienda.nombre}`);
                    console.log(`Precio: ${producto.precio.toFixed(2)} Pesos`);
                    console.log(`Stock: ${producto.stock}`);
                    console.log(`                             `);
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
buscarProducto("tv"); // Cambiar el nombre para buscar otros productos

console.log("///-------------------------------------------------------///");
