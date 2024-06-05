let obj, index, maxIndex;

cargarJSON();
document.getElementById("prev").addEventListener("click", mostrarAnterior);
document.getElementById("next").addEventListener("click", mostrarSiguiente);

function cargarJSON() {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        obj = JSON.parse(this.responseText);
        index = 0;
        maxIndex = obj.Sinners.length - 1;
        mostrarJugador(index);
    }
    xhr.open("GET", "personajes.json", true);
    xhr.send();
}

function mostrarJugador(i) {
    let Sinners = obj.Sinners[i];
    let nombre = Sinners.nombre;
    let imagen = Sinners.imagen;
    let posicion = Sinners.posicion;

    let img = '<img src="' + imagen + '" alt="">';
    let codigoHTML = '<div id="info">' +   
                        '<p id="num">'+ posicion + '</p>' +
                        '<p id="nombre">'+ nombre +'</p>' +
                    '</div>' +
                    '<div id="foto">' + img + '</div>';

    document.getElementById("personajes").innerHTML = codigoHTML;
}

function mostrarAnterior() {
    if (index == 0) {
        index = maxIndex;
    } else {
        index -= 1;
    }
    mostrarJugador(index);
}

function mostrarSiguiente() {
    if (index === maxIndex) {
        index = 0;
    } else {
        index += 1;
    }
    mostrarJugador(index);
}