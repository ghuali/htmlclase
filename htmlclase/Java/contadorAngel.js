function cambiarColor(){

}
function incrementar(){

    const contador = Number(document.getElementById('contador').innerHTML) + 1;
    document.getElementById('contador').innerHTML = contador.toString();
    ponerBorde(contador);
}
function decrementar(){

    const contador = Number(document.getElementById('contador').innerHTML) - 1;
    document.getElementById('contador').innerHTML = contador.toString();
    ponerBorde(contador);
}

function ponerBorde(valor){

    if (valor > 0){
        numero.classList.remove("negativo");
        numero.classList.add("positivo");  
    } else if (valor < 0){
        numero.classList.remove("positivo");
        numero.classList.add("negativo");
    } else if (valor == 0){
        numero.classList.remove("negativo", "positivo");
    }


}