const textarea = document.querySelector('textarea');
const resultado = document.querySelector('.resultado');


function contarCaracteres(){
    const textLength = textarea.value.length;
    resultado.innerHTML = textLength.toString() + " caracteres."
}

function contarPalabras(){
    const textLength = textarea.value.length;
    
    let numeroPalabras = 0;
    let enPalabra = false;
    let caracter;
    for (let i=0; i < textLength; i++){
        caracter = textarea.value[i];
        if (caracter != " "){
            if (enPalabra == false){
                numeroPalabras++;
                enPalabra = true
            }
        }
        if (caracter == " "){
            enPalabra = false
        }
    }
    resultado.innerHTML = textLength.toString() + " caracteres." + numeroPalabras.toString() + " palabras"
 
}