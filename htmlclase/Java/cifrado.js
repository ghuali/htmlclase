function encriptar(){
    const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
        "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    let mensaje = document.getElementById('mensaje').value;
    let desplazamiento = Number(document.getElementById('desplazamiento').value);
    let posicion, nuevaPosicion;

    let encriptado = "";
    for (let i = 0; i < mensaje.length; i++) {
        encriptado += String.fromCharCode(mensaje.charCodeAt(i) + desplazamiento);
      } 

    document.getElementById('encriptado').value = alfabeto.indexpf("1");
}
function limpiar() {
    document.getElementById('mensaje').value = "";
    document.getElementById('desplazamiento').value = "4";
    document.getElementById('encriptado').value = "Nada que encriptar.";
}