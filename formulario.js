var nombre= document.getElementById("nombre");
var apellido= document.getElementById("apellido");
var edad= document.getElementById("edad");
var mail=document.getElementById("mail")
var error =document.getElementById("error");
error.style.color="red";
function enviarformulario(){
    console.log("enviando formulario");
    var mensajeserror = [];

    if(nombre.value === null || nombre.value === ""){
        mensajeserror.push("ingresa tu nombre");
    }
    if(apellido.value === null || apellido.value === ""){
        mensajeserror.push("ingresa tu apellido");
    }
    if(edad.value === null || edad.value === ""){
        mensajeserror.push("ingresa tu edad");
    }
    if(mail.value === null || mail.value === ""){
        mensajeserror.push("ingresa tu mail");
    }

    

    error.innerHTML= mensajeserror.join(",");
    return false;

}