document.querySelector(".calculadora").addEventListener('click', function(event) {
    const clickedElement = event.target;
    pulsaTecla(clickedElement);
});

// Lo que se muestra por pantalla
let pantalla = "";
// Expresión regular para buscar un operador
const regexOperador = /[\+\-x\/]/;
// Expresión regular para buscar un dígito
const regexDigito = /^\d$/;
// Expresión regular para un decimal
const regexDecimal = /\./;

function pulsaTecla(clickedElement) {
    let tecla, bOperador, posOperador, operando1, operando2, operador;
    tecla = clickedElement.innerHTML;
    bOperador = regexOperador.test(pantalla);

    if (regexDigito.test(tecla)) {
        pantalla += tecla;
    } else if (pantalla.length > 0) {
        if (tecla === "AC") {
            pantalla = "";
        } else if (tecla === "←") {
            pantalla = pantalla.substring(0, pantalla.length - 1);
        } else if (regexDecimal.test(tecla)) {
            if (!pantalla.includes(".")) {
                pantalla += tecla;
            }
        } else if (tecla === "+/-") {
            if (pantalla.startsWith("-")) {
                pantalla = pantalla.substring(1);
            } else {
                pantalla = "-" + pantalla;
            }
        } else if (regexOperador.test(tecla)) {
            if (!bOperador) {
                pantalla += tecla;
            }
        } else if (tecla === "=") {
            posOperador = pantalla.search(regexOperador);
            operando1 = parseFloat(pantalla.substring(0, posOperador));
            operador = pantalla.charAt(posOperador);
            operando2 = parseFloat(pantalla.substring(posOperador + 1));
            if (operador === "+") {
                pantalla = operando1 + operando2;
            } else if (operador === "-") {
                pantalla = operando1 - operando2;
            } else if (operador === "x") {
                pantalla = operando1 * operando2;
            } else if (operador === "/") {
                pantalla = operando1 / operando2;
            }
        }
    }

    document.getElementById("pantalla").value = pantalla;
}