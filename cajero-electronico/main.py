usuario = {
    "usuario":{"contraseña":"1234","saldo":10000},
    "usuario2":{"contraseña":"1234","saldo":5000},
    "usuario3":{"contraseña":"1234","saldo":8000}, 
    "usuario4":{"contraseña":"1234","saldo":100000},
    "usuario5":{"contraseña":"1234","saldo":1000000}
}

def identificar_usuario(nombre, contraseña):
    usuario = usuario.get(nombre)
    if usuario and usuario.get["contraseña"] == contraseña:
        return usuario
    else:
        return None
    
def consultar_saldo(usuario):
    return usuario["saldo"]

def retirar_dinero(usuario, cantidad):
    if cantidad > 0:
        if cantidad <= usuario.get["saldo"]:
            usuario["saldo"] -= cantidad
            return f"Se han retirado ${cantidad} de tu cuenta"
    return "saldo insuficiente"

def depositar_dinero(usuario, cantidad):
    if cantidad > 0:
        usuario["saldo"] += cantidad
        return f"Se han depositado ${cantidad} a tu cuenta"
    return "la cantidad a depositar debe ser mayor a 0"
#creacion de menu en bucle while y uso de las funciones creadas
#creacion de menu que me va a permitir autentificar si el usuario esta creado y luego de autentificarlo me va a permitir revisar las opciones del cajero

def menu():
    while True:
        print("-----Bienvenido al cajero-----")
        nombre = input("ingrese su nombre o (exit) para salir: ")
        if nombre.lower() == "exit":
            break
        contraseña = input("ingrese su contraseña: ")
        autentificado = identificar_usuario(nombre,contraseña)
        if not autentificado:
            print("el usuario no autentificado")
        else:
            print(f"Bienvenido al cajero {nombre}")
            while True:
                print("----------Menu Cajero----------")
                print("1. Consultar Saldo")
                print("2. Retirar Dinero")
                print("3. Depositar Dinero")
                print("4. Salir")
                print("-------------------------------")
                opcion = input("ingrese una opcion: ")
                if opcion == "1":
                    print(f"tu saldo es: {consultar_saldo(autentificado)}")
                elif opcion == "2":
                    cantidad = int(input("ingrese la cantidad a retirar: "))
                    print(retirar_dinero(autentificado, cantidad))
                elif opcion == "3":
                    cantidad = int(input("ingrese la cantidad a depositar: "))
                    print(depositar_dinero(autentificado, cantidad))
                elif opcion == "4":
                    print("hasta la proxima")
                    break
menu()