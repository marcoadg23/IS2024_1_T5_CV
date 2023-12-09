// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    // Cambiar color del encabezado al hacer clic
    const header = document.querySelector('header');
    header.addEventListener('click', function () {
        const randomColor = getRandomColor();
        header.style.backgroundColor = randomColor;
    });

    // Mostrar/ocultar detalles al hacer clic en los títulos de sección
    const sectionTitles = document.querySelectorAll('.hero_tittle');
    sectionTitles.forEach(title => {
        title.addEventListener('click', function () {
            const details = this.nextElementSibling; // Obtener el siguiente elemento (párrafo) como detalles
            details.classList.toggle('show-details'); // Alternar la clase para mostrar/ocultar detalles
        });
    });
/*
    // Mostrar mensaje al hacer clic en el número de teléfono
    const phoneNumberLink = document.querySelector('.hero__paragraph a[href^="tel:"]');
    if (phoneNumberLink) {
        phoneNumberLink.addEventListener('click', function (event) {
            event.preventDefault();
            const phoneNumber = this.textContent.trim();
            alert(`Intentando llamar al número: ${phoneNumber}`);
            // Puedes reemplazar la alerta con la lógica para realizar la llamada real
        });
    } */

    // Función para obtener un color aleatorio
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
