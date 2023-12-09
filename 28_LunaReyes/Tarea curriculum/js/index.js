const Cursos=document.getElementById("Cursos");
const Pasatiempo=document.getElementById("Pasatiempos");

function verificarAnchoVentana(){
    var anchoVentana = window.innerWidth;

    if (anchoVentana > 800) {
        // Ejecutar código si el ancho es mayor que 800 píxeles
        Cursos.addEventListener("click",()=>{
            Swal.fire({
                title:"Cursos completados",
                text:"Conforme se realicen más cursos se integraran en esta sección",
                icon:"info",
                width:"30%",
                position:"center",
                timer:5000,
                timerProgressBar:true,
                stopKeydownPropagation:false,
                allowOutsideClick:true
            })
        })
        
        Pasatiempo.addEventListener("click",()=>{
            Swal.fire({
                title:"Mis Pasatiempos",
                text:"Estos pasatiempos refleja de manera precisa en mis gustos y mi personalidad.",
                icon:"info",
                width:"30%",
                position:"center",
                timer:5000,
                timerProgressBar:true,
                stopKeydownPropagation:false,
                allowOutsideClick:true
            })
        })
        
        Swal.fire({
            title:"Bienvenid@",
            text:"a mi curriculum",
            icon:"info",
            width:"50%",
            position:"bottom-right",
            timer:3000,
            timerProgressBar:true,
            stopKeydownPropagation:false,
            allowOutsideClick:true
        })
    } else {
        // Ejecutar código si el ancho es menor o igual a 800 píxeles
        Cursos.addEventListener("click",()=>{
            Swal.fire({
                title:"Cursos completados",
                text:"Conforme se realicen más cursos se integraran en esta sección",
                icon:"info",
                width:"80%",
                position:"center",
                timer:5000,
                timerProgressBar:true,
                stopKeydownPropagation:false,
                allowOutsideClick:true
            })
        })
        
        Pasatiempo.addEventListener("click",()=>{
            Swal.fire({
                title:"Mis Pasatiempos",
                text:"Estos pasatiempos refleja de manera precisa en mis gustos y mi personalidad.",
                icon:"info",
                width:"80%",
                position:"center",
                timer:5000,
                timerProgressBar:true,
                stopKeydownPropagation:false,
                allowOutsideClick:true
            })
        })
        
        Swal.fire({
            title:"Bienvenid@",
            text:"a mi curriculum",
            icon:"info",
            width:"90%",
            position:"center",
            timer:3000,
            timerProgressBar:true,
            stopKeydownPropagation:false,
            allowOutsideClick:true
        })
    }
}
// Llamada a la función cuando se carga la página
verificarAnchoVentana();

// Escucha los cambios en el tamaño de la ventana y vuelve a verificar
window.addEventListener('resize', verificarAnchoVentana);