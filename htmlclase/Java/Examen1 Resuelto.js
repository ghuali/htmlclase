let obj,index,maxIndex;

cargarJSON();
document.getElementById("prev").addEventListener("click",mostrarAnterior);
document.getElementById("prev").addEventListener("click",mostrarSiguiente)

function cargarJSON() {
    let url, xhr;

    xhr = new XMLHttpRequest();
    xhr.onload = function () {
        mostrarInformacion(this);
    }
    xhr.open("GET","Examen1.json")
    xhr.send();
}

function mostrarInformacion(xhr) {
    obj = JSON.parse(xhr.responseText);
    index = 0;
    maxIndex = obj.jugadores.length - 1

    mostrarJugador(index);
}
    

function mostrarInformacion(i) {
    document.getElementById("jugador").innerHTML = obj.jugadores[i].nombre;

}
function mostrarAnterior(){
    if (index == 0) {
        index = maxIndex
    } else {
        index -= 1;
    }
    mostrarJugador(index)
}
function mostrarSiguiente(){
    if (index == 0) {
        index = maxIndex
    } else {
        index += 1;
    }
    mostrarJugador(index)
}


















