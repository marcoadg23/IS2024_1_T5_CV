// Función para mostrar una sección y desplazarse hasta ella
function showSection(sectionId, button) {
    var section = document.getElementById(sectionId);

    // Mostrar la sección clicada
    section.style.display = 'block';

    // Desplazarse hasta la sección
    section.scrollIntoView({ behavior: 'smooth' });

    // Agregar la clase 'active' al botón clicado
    var buttons = document.querySelectorAll('.nav-button');
    buttons.forEach(function (btn) {
        btn.classList.remove('active');
    });
    button.classList.add('active');
}
