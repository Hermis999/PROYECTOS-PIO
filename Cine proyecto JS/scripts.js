// Arreglo de películas inicial (puedes agregar más)
let movies = [
    { title: "Inception", year: 2010, description: "Un ladrón profesional se especializa en entrar en los sueños de las personas y robar sus secretos. Sin embargo, su nueva misión se convierte en una tarea imposible cuando se enamora de una de sus víctimas.", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3N4H9nL0oIYXBerCPT_yPFsm4f85_6fYSog&s" },
    { title: "The Matrix", year: 1999, description: "Neo, un joven hacker, se entera de que su vida es solo una ilusión creada por las máquinas para mantener a los humanos bajo control. Con la ayuda de Morpheus, Neo se une a la lucha contra las máquinas y se convierte en 'El elegido'.", poster: "https://es.web.img3.acsta.net/medias/nmedia/18/72/16/76/20065616.jpg" },
    { title: "The Prestige", year: 2006, description: "Un mago rivaliza con otro mago en una serie de trucos cada vez más peligrosos y complejos. Sin embargo, su rivalidad se convierte en una obsesión que les cuesta muy cara.", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5n-OfOAXHWVKYGwZPRbTJ8VTmT8UwhccetQ&s" },
    { title: "Deadpool 3", year: 2024, description: "Después de los eventos de Deadpool 2, el mercenario con la boca sucia debe enfrentarse a una serie de desafíos para proteger a sus seres queridos y luchar contra un enemigo muy peligroso.", poster: "https://es.web.img3.acsta.net/img/3f/2e/3f2efc609e5e23d748f1d44231bf6b2f.jpg" },
    { title: "Avengers: Infinity War", year: 2018, description: "Los Vengadores deben unirse para luchar contra Thanos, un poderoso guerrero que busca recolectar las seis gemas del infinito para destruir la mitad de la vida en el universo.", poster: "https://imgs.search.brave.com/nnbS5shlmKuRPJNHOYyuRFmLbFa5KIkl4wSM6MB3RDo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bWFydmVsLmNvbS9j/b250ZW50LzF4L2F2/ZW5nZXJzaW5maW5p/dHl3YXJfbG9iX2Ny/ZF8wMi5qcGc" },
    { title: "Barbir", year: 2023, description: "Un barbero se propone afeitado a los clientes más peligrosos de la ciudad para obtener dinero y fama.", poster: "https://imgs.search.brave.com/8VRALOxcwgUd2I0pRTQUIX-c2km7nzmD90LYPTDqbH4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc0LzI2/LzRiLzc0MjY0YmFl/MmExMGEyYjNlMWEy/OGIxMGEzYTk2NTk5/LmpwZw" },
    { title: "Todo en todas partes al mismo tiempo", year: 2022, description: "Una joven china-estadounidense debe enfrentarse a una serie de desafíos para proteger a sus seres queridos y luchar contra una serie de enemigos muy peligrosos.", poster: "https://imgs.search.brave.com/RJpW6_zV37X3PeO0CN6njFEFnpfTThJiiHW5xQZIP0M/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9kaWFt/b25kZmlsbXMuY29t/L2ltZy9wb3N0ZXIv/NjI3YTZiYjlmMjg2/YjVmNmYyMTJkNzlk/OC5qcGc" },
    { title: "Spider-man: a travez del spiderverso", year: 2023, description: "Después de los eventos de Spider-man: No Way Home, Spider-man debe enfrentarse a una serie de desafíos para proteger a sus seres queridos y luchar contra una serie de enemigos muy peligrosos.", poster: "https://imgs.search.brave.com/d4CV4drovkrAuXu9HE23U6Voh8DraNnNCRYxasS0qW4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODF5cHBDeDBBQUwu/anBn" },
    { title: "Nimona", year: 2023, description: "Un guerrero debe luchar contra una serie de enemigos muy peligrosos para proteger a su reino y a sus seres queridos.", poster: "https://imgs.search.brave.com/Qam_Dw5spsPX2VZCkkv-DGx0BeXIyl8H2JNjXT3EdLc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLmNvbGxpZGVy/aW1hZ2VzLmNvbS93/b3JkcHJlc3Mvd3At/Y29udGVudC91cGxv/YWRzLzIwMjMvMDUv/bmltb25hLXBvc3Rl/ci5qcGc" }
];

// Seleccionar los elementos del DOM
const addMovieForm = document.getElementById('addMovieForm');
const movieList = document.getElementById('movieList');
const yearFilter = document.getElementById('yearFilter');
const sortMovies = document.getElementById('sortMovies');
const themeToggle = document.getElementById('themeToggle');
const filtersToggle = document.getElementById('filtersToggle');
const addMovieToggle = document.getElementById('addMovieToggle');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalYear = document.getElementById('modalYear');
const modalDescription = document.getElementById('modalDescription');
const modalPoster = document.getElementById('modalPoster');
const closeModal = document.getElementById('closeModal');

// Mostrar películas en la página
function displayMovies(movies) {
    movieList.innerHTML = ''; // Limpiar el contenedor de películas

    movies.forEach((movie, index) => {
        // Crear una tarjeta para cada película
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        movieCard.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>${movie.year}</p>
            <button class="delete-btn" onclick="deleteMovie(${index})">Eliminar</button>
            <button class="favorite-btn" onclick="markAsFavorite(${index})">★</button>
        `;

        // Comprobar si la película tiene una descripción
        if (!movie.description) {
            console.error(`La película ${movie.title} no tiene descripción.`);
        }

        // Hacer clic en la tarjeta muestra los detalles en el modal
        movieCard.addEventListener('click', () => showModal(movie));
        movieList.appendChild(movieCard);
    });
}

// Mostrar detalles de una película en el modal
function showModal(movie) {
    // Comprobar si la película tiene título y año
    if (!movie.title || !movie.year) {
        console.error(`La película ${movie.title} no tiene título o año.`);
        return;
    }

    modalTitle.textContent = movie.title;
    modalYear.textContent = `Año: ${movie.year}`;
    modalDescription.textContent = `Descripción: ${movie.description || 'No disponible'}`; // Mostrar la descripción de la película si existe
    modalPoster.src = movie.poster;
    modal.classList.remove('hidden'); // Mostrar el modal
}
// Ocultar el modal
closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
});

// Agregar una nueva película
addMovieForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evitar que la página se recargue

    const title = document.getElementById('movieTitle').value;
    const year = document.getElementById('movieYear').value;
    const description = document.getElementById('movieDescription').value;
    const poster = document.getElementById('moviePoster').value;

    if (title && year && description && poster) {
        // Añadir nueva película al arreglo
        movies.push({ title, year, description, poster });
        displayMovies(movies); // Mostrar todas las películas nuevamente
        saveMovies(); // Guardar películas en localStorage
        addMovieForm.reset(); // Reiniciar el formulario
    }
});

// Guardar películas en localStorage
function saveMovies() {
    localStorage.setItem('movies', JSON.stringify(movies));
}

// Cargar películas desde localStorage al iniciar la página
document.addEventListener('DOMContentLoaded', () => {
    const storedMovies = JSON.parse(localStorage.getItem('movies'));
    if (storedMovies) {
        movies_store = storedMovies;
    }
    displayMovies(movies_store); // Mostrar las películas guardadas
    displayMovies(movies);
});

// Eliminar una película
function deleteMovie(index) {
    movies.splice(index, 1); // Eliminar del arreglo
    displayMovies(movies); // Mostrar las películas restantes
    saveMovies(); // Actualizar en localStorage
}

// Marcar una película como favorita
function markAsFavorite(index) {
    alert(`${movies[index].title} marcada como favorita.`);
}

// Filtrar películas por año
yearFilter.addEventListener('input', (e) => {
    const year = e.target.value;
    const filteredMovies = movies.filter(movie => movie.year == year);
    displayMovies(filteredMovies);
});

// Ordenar películas por título o año
sortMovies.addEventListener('change', (e) => {
    const sortBy = e.target.value;
    const sortedMovies = [...movies].sort((a, b) => {
        if (sortBy === 'title') {
            return a.title.localeCompare(b.title);
        } 
        else if (sortBy === 'year') {
            return a.year - b.year;
        }
    });
    displayMovies(sortedMovies);
});

// Cambiar entre modo oscuro y claro
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('other-mode');
    document.querySelector('nav').classList.toggle('other-mode');
    document.querySelector('aside').classList.toggle('other-mode');

    document.querySelectorAll('button').forEach(button => {
        button.classList.toggle('other-mode');
    });
    
    document.querySelectorAll('.movie-card').forEach(card => {
        card.classList.toggle('other-mode');
    });
    
    themeToggle.textContent = document.body.classList.contains('other-mode') 
        ? 'Cambiar a modo oscuro' 
        : 'Cambiar a modo claro';
});

// Mostrar filtros


filtersToggle.addEventListener('click', () => {
    filters.classList.toggle('hidden');
    filtersToggle.textContent = filters.classList.contains('hidden') 
        ? 'Mostrar Filtros' 
        : 'Ocultar Filtros';
});

// Mostrar filtros


addMovieToggle.addEventListener('click', () => {
    addMovieForm.classList.toggle('hidden');
    addMovieToggle.textContent = addMovieForm.classList.contains('hidden') 
        ? 'Agregar Peliculas' 
        : 'Ocultar Formulario';
});