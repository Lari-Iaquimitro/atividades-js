console.clear();
var teclado = require('prompt-sync')();
var lado1;
var lado2;
var lado3;
lado1 = parseFloat(teclado("Digite o primeiro do tri\u00E2ngulo:"));
lado2 = parseFloat(teclado("Digite o segunod lado do tri\u00E2ngulo:"));
lado3 = parseFloat(teclado("Digite o terceiro lado do tri\u00E2ngulo:"));
if (Number.isNaN(lado1) || Number.isNaN(lado2) || Number.isNaN(lado3)) {
    console.log("Entrada com caracteres, utilize n\u00FAmero");
}
else if ((lado1 == lado2) && (lado2 == lado3)) {
    console.log("Os tr\u00EAs lados iguais Equil\u00E1tero");
}
else if ((lado1 == lado2) || (lado1 == lado3) || (lado3 == lado2)) {
    if ((lado1 !== lado2) || (lado2 !== lado3) || (lado2 !== lado3)) {
        console.log("Dois lados iguais Is\u00F3cele");
    }
    else {
        console.log("Algo deu errado!");
    }
}
else if ((lado1 !== lado2) && (lado1 !== lado3) && (lado2 !== lado3)) {
    console.log("Os tr\u00EAs lados diferentes Escaleno");
}
else {
    console.log("Algo deu errado!");
}
