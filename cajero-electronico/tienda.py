import os
productos = [
    {"nombre":"lapiz","precio":3500,"stock":10},
    {"nombre":"cuaderno","precio":2500,"stock":5},
    {"nombre":"boligrafo","precio":1500,"stock":3},
    {"nombre":"libreta","precio":2000,"stock":7},
    {"nombre":"escuadra","precio":8000,"stock":2},
    {"nombre":"regla","precio":5000,"stock":8}
]

carrito = []

def limpiar_pantalla():
    if os.name == 'nt':
        os.system('cls') #limpiar terminal/pantalla de windows
    else:
        os.system('clear') #limpiar terminal en linux o mac


def mostrar_productos():
    limpiar_pantalla()
    mostrar_total_carrito()
    print("\n------------------------MENU DE PRODUCTOS----------------------")
    for i, producto in enumerate(productos):
        print(f"{i+1}. {producto['nombre']} - Precio: ${producto['precio']} - Cantidad: {producto['stock']}")
    print("---------------------------------------------------------------")
    
def agregar_al_carrito():
    while True:
        limpiar_pantalla()
        mostrar_productos()
        mostrar_carrito()
        try:
            opcion = int(input("Digite la opcion de el producto que desea agregar: "))
            if 1 <= opcion <= len(productos):
                cantidad = int(input("Digite la cantidad de productos a comprar: "))
                producto = productos[opcion - 1]
                if cantidad > producto["stock"]:
                    print("No hay suficientes existencias del producto ")
                else:
                    productos[opcion-1]["stock"] -= cantidad                            
                    nuevo_producto = {"nombre":producto["nombre"], "precio":producto["precio"],"stock": cantidad}        
                    if not any(i["nombre"] == nuevo_producto["nombre"] for i in carrito):
                        carrito.append(nuevo_producto)
                        print(f"Felicidades! Anadido {cantidad} {producto['nombre']} de manera exitosa")
                    else:
                        for i in carrito:
                            if i["nombre"] == nuevo_producto["nombre"]:
                                i["stock"] += cantidad
                                print(f"Se ha actualizado el {producto['nombre']}")
                                break
            continuar = input("Desea continuar comprando? (s/n): ")
            if continuar.lower() == "n":
                break
            elif continuar.lower() != "s":
                break
        except:
            print("Se ha producido un error")        

def mostrar_carrito():
    if not carrito:
        print("---------------------------------------------------------------")
        print("                     El carrito esta vacio                     ")
        print("---------------------------------------------------------------")
    else:
        print("\n------------------------MENU DE PRODUCTOS----------------------")
        for i, producto in enumerate(carrito):
            print(f"{i+1}. {producto['nombre']} - Precio: ${producto['precio']} - Cantidad: {producto['stock']}")
        print("---------------------------------------------------------------")
    
def eliminar_del_carrito():
    while True:
        limpiar_pantalla()
        mostrar_total_carrito()
        mostrar_carrito()
        if not carrito:
            break
        else:   
            try:
                opcion = int(input("Selecione el producto que desea eliminar: "))
                if 1 <= opcion <= len(carrito):
                    cantidad = int(input("Digite la cantidad de productos a eliminar: "))
                    if carrito[opcion-1]["stock"] < cantidad:
                        print("La cantidad de productos a eliminar no es valida")
                    else:
                        carrito[opcion-1]["stock"] -= cantidad
                        if carrito[opcion-1]["stock"] == 0:
                            producto = carrito.pop((opcion)-1)
                            for item in productos:
                                if item["nombre"] == producto["nombre"]:
                                    item["stock"] += producto["stock"]
                                    print(f"Se ha eliminado el {producto['nombre']} de su lista de compras")
                        else:
                            print(f"Se ha eliminado {cantidad} {carrito[opcion-1]['nombre']} del carrito")
                continuar = input("Desea seguir eliminando productos de su carrito? (s/n): ")
                if continuar.lower() == "n":
                    break
                elif continuar.lower() != "s":
                    break
            except:
                print("Se ha producido un error")

def mostrar_total_carrito():
    total = 0
    for t in carrito:
        total += t["stock"] * t["precio"]
    print(f"El total a pagar es: ${total}")

def generar_recibo(carrito, total, medio_pago, cambio=0):
    limpiar_pantalla()
    print("\n------------------------RECIBO----------------------")
    print("Producto\tPrecio\tCantidad\tSubtotal")
    for item in carrito:
        print(f"{item['nombre']}\t${item['precio']}\t{item['stock']}\t${item['stock']*item['precio']}")
    print(f"Total: {total}")
    if medio_pago == "Tarjeta":
        print(f"Medio de pago: {medio_pago}")
    else:
        print(f"Medio de pago: {medio_pago}, cambio: {cambio}")
    print("---------------------------------------------------------------")
    carrito.clear()

def confirmar_pago():
    while True:
        limpiar_pantalla()
        mostrar_total_carrito()
        total = 0
        for d in carrito:
            total += d["stock"]*d["precio"]
        try:
            if carrito:
                print("\n------------------------METODOS DE PAGO----------------------")
                print("Los productos que se han agregado al carrito son:")
                mostrar_carrito()
                print(f"El precio total de sus productos es: ${total}")
                print("---------------------------------------------------------------")
                confirmar = input("Que metodo de pago desea usar? (Efectivo/Tarjeta): ")
                if confirmar.lower() == "efectivo":
                    efectivo = float(input("Ingrese el dinero en efectivo: "))
                    if total <= efectivo:
                        devuelto = efectivo - total                   
                        generar_recibo(carrito, total, confirmar, devuelto)
                        print("")
                        print("Gracias por su compra, que tenga buen dia")
                        carrito = []
                        break
                    else:
                        print("El dinero en efectivo es insuficiente")
                elif confirmar.lower() == "tarjeta":
                    print("Gracias por su compra, que tenga buen dia")
                    devuelto = 0
                    generar_recibo(carrito, total, confirmar, devuelto)
                    print("")
            else:
                mostrar_carrito()
                break
            print("")
            continuar = input("Desea continuar con el proceso de pago? (s/n): ")
            if continuar.lower() == "n":
                break
            elif continuar.lower() != "s":
                break
        except:
            print("error de entrada")

def cancelar_compra():
    limpiar_pantalla()
    mostrar_total_carrito()
    if carrito:
        print("\n------------------------CANCELAR COMPRA----------------------")
        print("Los productos que se han agregado al carrito son:")
        mostrar_carrito()
        print("---------------------------------------------------------------")
        continuar = input("Desea cancelar la compra y eliminar el carrito? (s/n): ")
        if continuar.lower() == "s":
            for e in carrito:
                for p in productos:
                    if p["nombre"] == e["nombre"]:
                        p["stock"] += e["stock"]
                        break
            #carrito = []
            carrito.clear()
            print("")
            print("Gracias por preferirnos, que tenga buen dia")
    else:
        mostrar_carrito()

def main():
    while True:
        limpiar_pantalla()
        mostrar_total_carrito()
        print("\n------------------------MENU------------------------")
        print("1. Ver productos")
        print("2. Agregar al carrito")
        print("3. Ver carrito")
        print("4. Eliminar del carrito")
        print("5. Confirmar pago")
        print("6. Cancelar compra")
        print("7. Salir")
        print("---------------------------------------------------")
        try:
            opcion = int(input("Seleccione una opcion: "))
            if opcion == 1:
                mostrar_productos()
            elif opcion == 2:
                agregar_al_carrito()
            elif opcion == 3:
                limpiar_pantalla()
                mostrar_total_carrito()
                mostrar_carrito()
            elif opcion == 4:
                eliminar_del_carrito()
            elif opcion == 5:
                confirmar_pago()
            elif opcion == 6:
                cancelar_compra()
            elif opcion == 7:
                print("Saliendo del programa...")
                break
            input("Presione enter para continuar...")
        except ValueError:
            print("La entrada es invalida, por favor digite un numero")
        except Exception:
            print("Se ha producido un error")

main()
