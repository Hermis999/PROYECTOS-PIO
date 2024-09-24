mi_lista = [1, 2, 3, 10, 10, "hola"]
print(mi_lista)

#acceder a un elemento
print(mi_lista[3])

mi_lista[3]= "adios"
print(mi_lista)

mi_lista.append(50) #agrega un "50" al final de la lista
print(mi_lista)

mi_lista.remove(10) #elimina el primer dato "10" que encuentre
print(mi_lista)

#contador
print(len(mi_lista))

'''
append() agrega un elemento al final
remove() elimina el primer elemento que coincide con el valor
len()  devuelve la longitud de la lista
'''
