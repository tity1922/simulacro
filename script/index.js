document.addEventListener("DOMContentLoaded", function() {
    cargarComponentes(); // Cargar el nav y footer
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-opinion");
    const promedioCalificacion = document.getElementById("promedio-calificacion");

    // Función para calcular el promedio de calificaciones
    function calcularPromedio() {
        let opiniones = JSON.parse(localStorage.getItem("opiniones")) || [];
        if (opiniones.length === 0) {
            promedioCalificacion.textContent = "Aún no hay calificaciones.";
            return;
        }

        let total = opiniones.reduce((sum, opinion) => sum + parseInt(opinion.calificacion), 0);
        let promedio = (total / opiniones.length).toFixed(1); // Redondea a un decimal

        // Mostrar el promedio con estrellas visuales
        promedioCalificacion.innerHTML = `⭐ ${promedio} / 5 (${opiniones.length} votos)`;
    }

    // Guardar nueva opinión
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let nombre = document.getElementById("nombre").value;
        let calificacion = document.getElementById("calificacion").value;
        let comentarios = document.getElementById("comentarios").value;

        let opiniones = JSON.parse(localStorage.getItem("opiniones")) || [];
        opiniones.push({ nombre, calificacion, comentarios });

        localStorage.setItem("opiniones", JSON.stringify(opiniones));

        form.reset(); // Limpiar formulario
        calcularPromedio(); // Recalcular promedio
    });

    // Calcular el promedio al cargar la página
    calcularPromedio();
});
