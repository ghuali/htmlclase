"Use strict"
consularJugdadores(this)

function consularJugdadores(){
    let jugadores,xhr;
    
    jugadores = document.getElementById("tarjetas").value;
    xhr = new XMLHttpRequest();
    xhr.onload = function(){
        mostrarInformacion(this);
    }
    xhr.open("GET",url);
    xhr.send();
}


function mostrarInformacion(xhr){
    let obj,posicion,nombre,bandera,abreviatura,puntos,img,jugador,codigoHTML

    obj = JSON.parse(xhr.responseText)
    
    posicion = obj.posicion;
    nombre = obj.nombre;
    bandera = '<img src="' + obj.bandera + '"alt="">';
    abreviatura = obj.abreviatura;
    puntos = obj.puntos
    img = '<img src="' + obj.img + '"alt="">'


    codigoHTML = '<div id="info">' +   
                    '<p id="num">'posicion'</p>' +
                    '<p id="nombre">Arturo Coello</p>' +
                '</div>'
                <div id="duo">    
                    <div id="nacionalidad">
                        <img src="https://www.padelfip.com/wp-content/uploads/2023/02/Spain_Fip.jpg" alt=""><p>ESP</p>
                    </div>
                    <div id="puntos">
                        <p>Puntos</p><p>12705</p>
                    </div>
                </div>
                <div id="foto">
                    <img src="https://www.padelfip.com/wp-content/uploads/2023/02/01-COELLO.png" alt="">
                </div>

}
