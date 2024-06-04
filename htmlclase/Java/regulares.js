document.getElementById("Buscar").onclick = function() {
    buscar()
}

document.getElementById("limpiar").onclick = function(){
    Limpiar()
}
function Limpiar(){
    console.log("Estoy en la función limpiar")
    document.getElementById("Texto").value = "";
    document.getElementById("patron").value = "";
    document.getElementById("Info").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
}
function buscar() {
    let texto, patron;

    texto = document.getElementById("Texto").value
    patron = document.getElementById("patron").value 
    console.log(texto);
    console.log(patron);
    document.getElementById("Info").innerHTML = "Has llamado a la función buscar()";
}