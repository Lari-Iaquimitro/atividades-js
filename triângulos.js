console.clear();
var teclado = require('prompt-sync')();
var lado1 = teclado("Digite o primeiro do tri\u00E2ngulo:");
var lado2 = teclado("Digite o segunod lado do tri\u00E2ngulo:");
var lado3 = teclado("Digite o terceiro lado do tri\u00E2ngulo:");
if ((lado1 == lado2) && (lado2 == lado3)) {
    console.log("O tri\u00E2ngulo \u00E9 um Equil\u00E1tero");
}
else if ((lado1 !== lado2) && (lado2 == lado3)) {
    console.log("O tri\u00E2ngulo \u00E9 um Is\u00F3celes");
}
else if ((lado1 == lado2) && (lado2 !== lado3)) {
    console.log("O tri\u00E2ngulo \u00E9 um Is\u00F3celes");
}
else if ((lado1 == lado3) && (lado3 !== lado2)) {
    console.log("Otri\u00E2ngulo \u00E9 um Is\u00F3celes");
}
else if ((lado1 !== lado2) && (lado2 !== lado3)) {
    console.log("O tri\u00E2ngulo \u00E9 um Escaleno");
}
else {
    console.log("Algo deu errado!");
}
