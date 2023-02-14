function validarForm()
{
    var verificar=true;
    var expRegNombre= /^([a-z ñáéíóú]{2,60})$/i;
	var expRegEmail =  /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,4})+$/;
    var formulario= document.getElementById("contacto-frm");
    var nombre=document.getElementById("nombre");
    var edad=document.getElementById("edad");
    var email=document.getElementById("email");
    var asunto=document.getElementById("asunto");
    var masculino=document.getElementById("M");
    var femenino=document.getElementById("F");
    var comentarios=document.getElementById("comentarios");
    if(!nombre.value){
        alert("El campo nombre es requerido");
        nombre.focus();
        verificar=false;
    }else if(!expRegNombre.exec(nombre.value)){
        alert("El campo nombre solo acepta letras");
        nombre.focus();
        verificar=false;
    }else if(!edad.value){
        alert("el campo edad es requerido");
        edad.focus();
        verificar=false;
    }else if(isNaN(edad.value)){
        alert("el campo edad solo acepta números");
        edad.focus();
        verificar=false;
    }else if(!email.value){
        alert("El campo correo es requerido");
        email.focus();
        verificar=false;
    }else if(!expRegEmail.exex(email.value)){
        alert("el campo esta mal escrito");
        email.focus();
        verificar=false;
    }else if(!asunto.value){
        alert("el campo asunto es requerido");
        asunto.focus();
        verificar=false;    
    }else if (!comentarios.value){
        alert("el campo comentario es requerido");
        comentarios.focus();
        verificar=false;
    }
    if(verificar){
        alert("se ha enviado el formulario");
    }
}

function limpiarForm(){
    document.getElementById("contacto-frm").reset();
}
window.onload=function(){
    var botonEnviar, botonLimpiar;

    botonLimpiar=document.getElementById("limpiar");
    botonLimpiar.onclick=limpiarForm;

    botonEnviar=document.getElementById("enviar");
    botonEnviar.onclick=validarForm;
}
