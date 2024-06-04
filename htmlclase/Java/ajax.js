document.getElementById("cargar").addEventListener("click", cargarAlumnos);

function cargarAlumnos() {
    let xhttp, xhttp2;
    
    xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("archivo").innerHTML = this.responseText;
    }
    xhttp.open("GET", "alumnos.txt");
    xhttp.send();


    xhttp2 = new XMLHttpRequest();
    xhttp2.onload = function() {
        document.getElementById("tabla").innerHTML = this.responseText;
    }
    xhttp2.open("GET", "tablaAlumnos.txt");
    xhttp2.send();
}