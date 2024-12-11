def generar_tabla_multiplicar(numero):
    for i in range(1,11,3):
        print(f"{numero} x {i} = {numero*i}")

numero = int(input("Ingrese el numero que desea multiplicar: "))
generar_tabla_multiplicar(numero)