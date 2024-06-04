function encriptar(){
    let mensaje = document.getElementById('mensaje').value;
    let desplazamiento = Number(document.getElementById('desplazamiento').value);

    let encriptado = "";
    for (let i = 0; i < mensaje.length; i++) {
        encriptado += String.fromCharCode(mensaje.charCodeAt(i) + desplazamiento);
      } 

    document.getElementById('encriptado').value = encriptado;
}
function limpiar() {
    document.getElementById('mensaje').value = "";
    document.getElementById('desplazamiento').value = "4";
    document.getElementById('encriptado').value = "Nada que encriptar.";
}