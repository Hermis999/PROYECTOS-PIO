import os

productos = [
    {"nombre":"Anillo de diamante","precio":10000, "cantidad":5},
    {"nombre":"Anillo de cuarzo","precio":400, "cantidad":8},
    {"nombre":"Anillo de plata","precio":500, "cantidad":12},
    {"nombre":"Anillo de oro","precio":6000, "cantidad":5}
]

carrito=[]

def limpiar_pantalla():
    if os.name == 'nt':
        os.system('cls') #limpiar terminal/pantalla de windows
    else:
        os.system('clear') #limpiar terminal en linux o mac
        
def mostrar_productos():
    limpiar_pantalla()
    print("------------------------MENU DE PRODUCTOS----------------------")
    for i, producto in enumerate(productos):
        print(f"{i+1}. {producto ['nombre']} - precio $ {producto ['precio']}- cantidad {producto['cantidad']}")
    print("---------------------------------------------------------------")

def agregar_al_carrito():
    while True:
        limpiar_pantalla()   
        mostrar_productos()
        try:          
            opcion = int(input("Digite la opcion de el producto que desea agregar: "))
            if 1 <= opcion <= len(productos):
                cantidad = int(input("Digite la cantidad de productos a comprar: "))
                producto = productos[opcion - 1]
                if cantidad > producto ["cantidad"]:
                    print("No hay suficientes existencias del producto ")
                else:
                    productos[opcion - 1]['cantidad'] -= cantidad  #no se si esta bien
                    carrito.append({"nombre":producto["nombre"], "precio":producto["precio"],"cantidad":
                        cantidad})
                    print(f"Felicidades! añadiste {cantidad} {producto['nombre']} de manera exitosa")
            else:
                print("El numero que digito no es valido")
            continuar = input("Desea continuar comprando? (s/n): ")
            if continuar.lower() == "n":
                break
            elif continuar.lower() != "s":
                break
        except Exception as e:
            print("Se ha producido un error")

def mostrar_carrito():
    limpiar_pantalla()
    if carrito:
        print("-----------------------CARRITO DE COMPRAS-----------------------")
        for i, item in enumerate(carrito, 1):
            print(f"{i}. producto: {item['nombre']} - ${item['precio']} - cantidad {item['cantidad']}")
        print("---------------------------------------------------------------")
    else:
        print("El carrito esta vacio")
    
def calcular_total():
    total = sum(item["precio"]*item["cantidad"] for item in carrito)
    print(f"El total a pagar es: ${total}")
    
def finalizar_compra():
    limpiar_pantalla()
    mostrar_carrito()
    if carrito:
        calcular_total()
        confirmar = input("Desea finalizar su compra) (s/n): ")
        if confirmar.lower() == "s":
            carrito.clear()
            print("La compra fue realizada exitosamente")
        else:
            print("La compra fue cancelada")
    else:
        print("No hay productos en el carrito")
def main():
    while True:
        limpiar_pantalla()
        print("--------------------------MENU JOYERIA--------------------------")
        print("1- Mostrar productos disponibles")
        print("2- Añadir productos al carrito")
        print("3- Mostrar carrito")
        print("4- Finalizar la compra")
        print("5- Salir de la compra")
        print("---------------------------------------------------------------")
        try:
            opciones = {
                1:mostrar_productos,
                2:agregar_al_carrito,
                3:mostrar_carrito,
                4:finalizar_compra
            }
            
            seleccion = int(input("Digite la opcion deseada: "))
            if seleccion in opciones:
                opciones[seleccion]()
                input("Presione enter para confirmar  ")
            elif seleccion == 5:
                break
        except ValueError:
            print("La entrada es invalida, por favor digite un numero")
            input("Presione enter para continuar ")
        except Exception:
            print("La entrada es invalida, por favor digite un valor valido")
            input("Presione enter para continuar ") 
main()