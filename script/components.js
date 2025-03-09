function cargarComponentes() {
    let navPlaceholder = document.getElementById("nav-placeholder");
    let footerPlaceholder = document.getElementById("footer-placeholder");


    /* aqui se agregaran los botones para el nav*/
    if (navPlaceholder) {
        navPlaceholder.innerHTML = `
            <nav>
                <ul> 
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="contacto.html">sipnosis</a></li>
                </ul>
            </nav>
        `;
    }

    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = `
            <footer>
                <p>&copy; 2025</p>
                <p>Contacto: contacto@.com</p>
            </footer>
        `;
    }
}