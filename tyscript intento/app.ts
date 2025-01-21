type Producto = {
    nombre: string;
    precio: number;
    stock: number;
    estado: boolean;
};

type Categoria = {
    nombre: string;
    productos: Producto[];
};

type Tienda = {
    id: number;
    nombre: string;
    categorias: Categoria[];
};

function buscarProducto(nombreProducto: string) : void {
    let encontrado = false;

    tiendas.forEach(tienda => {
        tienda.categorias.forEach(categoria => {
            categoria.productos.forEach(producto => {
                if (producto.nombre.toLowerCase() === nombreProducto.toLowerCase() && producto.estado) {
                    console.log(`Producto: ${producto.nombre}`);
                    console.log(`Tienda: ${tienda.nombre}`);
                    console.log(`Precio: ${producto.precio.toFixed(2)} Pesos`);
                    console.log(`Stock: ${producto.stock}`);
                    encontrado = true;
                }
                else{
                    console.log("Producto no encontrado o no está disponible.");
                }
            });
        });
    });

    if (!encontrado) {
        console.log("Producto no encontrado o no está disponible.");
    }
}

buscarProducto("TV"); // Puedes cambiar el nombre por cualquier producto