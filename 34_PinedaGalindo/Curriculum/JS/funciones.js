var nombre = document.getElementById("Nombre");
var correo = document.getElementById("mail");
var msj = document.getElementById("mensaje");
var boton = document.getElementById("enviar");

function verificar_email(email){
    var expresion = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;//Expresión regular para ver que cumpla el formato de un correo
    return expresion.test(email) ? true : false; //Si coincide entonces regresa True, en caso contrario regresa False
}
function validar_email(){
    if (!verificar_email(correo.value)) { //Si se regresa un false lanza una alerta
        alert("Por favor, ingrese un correo electrónico válido");
        return false;
    }
    return true;
}
function validarNombre(){
    if (nombre.value.trim() == "") { //Si el campo de nombre está vació entonces lanza una alerta
        alert("Escribe tu nombre por favor");
        return false;
    } else{
        return true
    }
}
function validarFormulario(event){
    event.preventDefault();//Evita que se envíe el formulario 
    if (validarNombre() && validar_email()){ //Si ya estan llenos los dos campos entonces ya se puede envíar el formulario porque el campo de asunto es opcional
        var notificacion ="Gracias por contactarte conmigo " + nombre.value + ", pronto recibirás mi respuesta"; 
        alert(notificacion);
        nombre.value = "";
        correo.value = "";
        msj.value = "";
    }
}
boton.addEventListener("click", validarFormulario);