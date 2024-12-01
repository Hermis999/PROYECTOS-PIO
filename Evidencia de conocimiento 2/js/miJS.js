
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los enlaces del menú
    const menuLinks = document.querySelectorAll('.nav-link');

    // Agrega un evento de clic a cada enlace del menú
    menuLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Evita que el enlace realice una navegación completa

            const targetHref = link.getAttribute('href'); // Obtén el href del enlace

            // Verifica que el href no sea "#"
            if (targetHref && targetHref !== '#') {
                // Carga el contenido dinámicamente
                loadContent(targetHref);
            }
        });
    });

    /**
     * Función para cargar contenido dinámico
     * @param {string} url - URL del contenido a cargar
     */
    function loadContent(url) {
        const contentContainer = document.getElementById('contentmain');

        // Muestra un indicador de carga (opcional)
        //contentContainer.innerHTML = `<p>Cargando...</p>`;
        loadign()
        // Usa fetch para cargar el contenido del archivo
        fetch(url).then(response => {
                if (!response.ok) {
                    throw new Error(`Error al cargar ${url}: ${response.statusText}`);
                }
                return response.text();
            })
            .then(data => {
                // Reemplaza el contenido dinámico
                contentContainer.innerHTML = data;
                // Busca la tabla y aplica DataTables
                initializePlugins()
                Swal.close()

            })
            .catch(error => {
                // Manejo de errores
                contentContainer.innerHTML = `<p>Error al cargar el contenido: ${error.message}</p>`;
            });
    }



    function initializePlugins() {
        // Selecciona la tabla y reinicia DataTables
        const dataTable = document.querySelector('#dataTableUsers');

        if (dataTable) {
            $(dataTable).DataTable({
                "paging": true,
                "searching": true,
                "ordering": true,
                "info": true,
                "language": {
                    "url": "//cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json"
                },
            });
        }
    }



    function loadign() {
        Swal.fire({
            title: "Cargando...",
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
            },
        });
    }
});


