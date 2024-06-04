function IMC(){

    let resultado = ""
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;
    let calculo = peso / (altura * altura);
    

    if (calculo < 18.5) {
        resultado = "Bajo de peso";
    }
    if (calculo >= 18.5 & calculo <= 24.9) {
        resultado = "Normal";
    }
    if (calculo >= 25 & calculo <= 29.9) {
        resultado = "Sobrepeso";
    }
    if (calculo >= 30) {
        resultado = "Obeso";
    }
    
    document.getElementById('resultado').value = resultado;
}