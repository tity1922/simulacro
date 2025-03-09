/* Función que carga componentes dinámicos como la barra de navegación y el footer */
function cargarComponentes() {
    // Obtiene los elementos donde se insertarán los componentes
    let navPlaceholder = document.getElementById("nav-placeholder");
    let footerPlaceholder = document.getElementById("footer-placeholder");

    /* Agrega el menú de navegación si el contenedor existe */
    if (navPlaceholder) {
        navPlaceholder.innerHTML = `
            <nav>
                <ul> 
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="contacto.html">Sinopsis</a></li>
                </ul>
            </nav>
        `;
    }

    /* Agrega el pie de página si el contenedor existe */
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = `
            <footer>
                <p>&copy; 2025</p>
                <p>Contacto: contacto@.com</p>
            </footer>
        `;
    }
}