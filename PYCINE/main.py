directores = [
    {
        "nombre": "Quentin Tarantino",
        "edad": 54,
        "genero": "Crimen",
    }
]
peliculas = [
    {
        "nombre": "Pulp Fiction",
        "director": "Quentin Tarantino",
        "duracion": 154,
        "genero": "Crimen",
        "clasificacion": "B",
    }
]

def mostrar_todas_peliculas(peliculas):
    print("-------------------Lista de peliculas-------------------")
    for pelicula in peliculas:
        print(f"Nombre: {pelicula['nombre']}")
        print(f"Director: {pelicula['director']}")
        print(f"Duracion: {pelicula['duracion']}")
        print(f"Genero: {pelicula['genero']}")
        print(f"Clasificacion: {pelicula['clasificacion']}")
        print("--------------------------------------------------------")


        