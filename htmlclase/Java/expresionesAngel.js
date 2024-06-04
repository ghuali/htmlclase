document.getElementById("opciones").onclick = function(){
    opciones();
}
document.getElementById("btnBuscar").onclick = function(){
    buscar()
}
document.getElementById("btnLimpiar").onclick = function(){
    limpiar();
}

function limpiar(){ 
    document.getElementById("texto").value = "";
    document.getElementById("patron").value = "";
    document.getElementById("informacion").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
}

function opciones(){
    let opcion = document.getElementById("opciones").value;
    document.getElementById("opciones").value;
    document.getElementById("patron").disable = (opcion === "manual") ? false : true;
    let patron = "";
    switch (opcion){
        case "manual":
            patron = "";
            break;
        case "dni":
            patron = "/[0-9]{8}[A-Z]/g";
            break;
        case "numero":
            patron = "/[\-\+]?[0-9]+([\.]{1}[0-9]+)?/g";
            break
        case "mac":
            patron = "/[0-9a-fA-F]{2}[:-]){5}([0-9a-fA-F]{2})/g";
            break
        case "ipv4":
            patron = "/\\b((25[0-5]|2[0-4]|[0-9]|1[0-9]{2}|[0-9]{1,2})\\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\\b/g";
            break
    }
    document.getElementById("patron").value = patron
}

function buscar(){
    let texto, patron, informacion, expReg, encontradas, desde, hasta, coincidencia, resultado;
    let opcion = document.getElementById("opciones").value;
    texto = document.getElementById("texto").value;
    patron = document.getElementById("patron").value;
    informacion = "";
    if (texto.trim() === ""){
        informacion = "No se ha indicado ningún texto en el que buscar.";
    } else if (patron.trim() === ""){
        informacion = "No se ha indicado ningún patron de busquedad.";
    }else{
        let match = patron.match(new RegExp('^/(.*?)/([gimy]*)$'));
        expReg = new RegExp(match[1], match[2]);

        encontradas = 0;
        desde = 0;
        hasta = 0;
        resultado = "";
        while ((coincidencia = expReg.exec(texto)) != null){
            hasta = coincidencia.index;
            resultado += texto.substring(desde, hasta);
            resultado += '<span class="encontrado">' + coincidencia[0] + "</span>";
            
            if (opcion === "dni"){
                informacion += validarDNI(coincidencia[0]);
            }

            desde = expReg.lastIndex;
            encontradas += 1;
        }
        resultado += texto.substring(desde, texto.length);
        informacion += "Se han encontrado " + encontradas.toString() + "coincidencia/s"
    }

    document.getElementById("informacion").innerHTML = informacion;
    document.getElementById("resultado").innerHTML = resultado;

}
function validarDNI(dni){
    let numero = dni.substring(0,8);
    let letra = dni[8];
    let letras = "TRWAGMYFPDXBNJZSQVHLCKE"

    let letraCorrecta = letras[numero % 23];

    if (letra === letraCorrecta) {
        return "El DNI" + dni + "es válido"
    }else{
        return "El DNI" + dni + "no es válido"
    }
}