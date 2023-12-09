function efectoEscritura(elemento, texto, tiempoEntreLetras, tiempoDePausa) {
    let i = 0;
    let intervalo = setInterval(function() {
        if (i < texto.length) {
            elemento.innerHTML += texto.charAt(i);
            i++;
        } else {
            clearInterval(intervalo);
            setTimeout(function() {
                elemento.innerHTML = ''; // Borra el contenido del título
                efectoEscritura(elemento, texto, tiempoEntreLetras, tiempoDePausa); // Llama a la función de nuevo para repetir la animación
            }, tiempoDePausa);
        }
    }, tiempoEntreLetras);
}

// Uso del método:
let elemento1 = document.getElementById('texto-animado');
let texto1 = 'Pilar Jaqueline Hernández García'; // El texto que se muestra
let tiempoEntreLetras = 100; // Tiempo en milisegundos entre cada letra
let tiempoDePausa = 1000; // Tiempo en milisegundos que se pausa antes de repetir la animación
efectoEscritura(elemento1, texto1, tiempoEntreLetras, tiempoDePausa);
