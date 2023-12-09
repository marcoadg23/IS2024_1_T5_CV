
// Esta función mueve el scroll de la pantalla desde la barra de navegación hasta 
// el elemento que hayamos elegido en ella.
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    
    if (section) {
       
        // scroll de inicio, es de donde partimos
        var scrollOffset = 0; 
        
        // Calcula la posición a la que se debe desplazar
        var targetPosition = section.offsetTop - scrollOffset;
        
        // Realiza el desplazamiento suave
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}