// Arreglo de películas inicial (puedes agregar más)
let movies = [
    { title: "Inception", year: 2010, poster: "https://example.com/inception.jpg" },
    { title: "The Matrix", year: 1999, poster: "https://example.com/matrix.jpg" },
    { title: "The Prestige", year: 2006, poster: "https://example.com/prestige.jpg" }
    { title: "Deadpool 3", year: 2024, poster: "https://www.sensacine.com/peliculas/pelicula-251633/" }

];

// Seleccionar los elementos del DOM
const addMovieForm = document.getElementById('addMovieForm');
const movieList = document.getElementById('movieList');
const yearFilter = document.getElementById('yearFilter');
const sortMovies = document.getElementById('sortMovies');
const themeToggle = document.getElementById('themeToggle');
const filtersToggle = document.getElementById('filtersToggle');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalYear = document.getElementById('modalYear');
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

        // Hacer clic en la tarjeta muestra los detalles en el modal
        movieCard.addEventListener('click', () => showModal(movie));
        movieList.appendChild(movieCard);
    });
}

// Mostrar detalles de una película en el modal
function showModal(movie) {
    modalTitle.textContent = movie.title;
    modalYear.textContent = `Año: ${movie.year}`;
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
    const poster = document.getElementById('moviePoster').value;

    if (title && year && poster) {
        // Añadir nueva película al arreglo
        movies.push({ title, year, poster });
        displayMovies(movies); // Mostrar todas las películas nuevamente
        saveMovies(); // Guardar películas en localStorage
        addMovieForm.reset(); // Reiniciar el formulario
    }
});

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
        } else if (sortBy === 'year') {
            return a.year - b.year;
        }
    });
    displayMovies(sortedMovies);
});

// Cambiar entre modo oscuro y claro
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') 
        ? 'Cambiar a modo oscuro' 
        : 'Cambiar a modo claro';
});

// Mostrar filtros
filters.classList.add('hidden'); // Ocultar los filtros inicialmente

filtersToggle.addEventListener('click', () => {
    filters.classList.toggle('hidden');
    filtersToggle.textContent = filters.classList.contains('hidden') 
        ? 'Mostrar filtros' 
        : 'Ocultar filtros';
})

// Guardar películas en localStorage
function saveMovies() {
    localStorage.setItem('movies', JSON.stringify(movies));
}

// Cargar películas desde localStorage al iniciar la página
document.addEventListener('DOMContentLoaded', () => {
    const storedMovies = JSON.parse(localStorage.getItem('movies'));
    if (storedMovies) {
        movies = storedMovies;
    }
    displayMovies(movies); // Mostrar las películas guardadas
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