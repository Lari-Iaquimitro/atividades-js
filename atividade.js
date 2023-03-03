console.clear();
var teclado = require('prompt-sync')();
var numero = teclado("Digite o n\u00FAmero:");
var nome = teclado("Digite seu nome:");
if (numero >= 18) {
    console.log("O usu\u00E1rio ".concat(nome, " \u00E9 maior de idade"));
}
else if (numero < 18) {
    console.log("O usu\u00E1rio ".concat(nome, " \u00E9 menor de idade"));
}
else {
    console.log("Algo deu errado");
}
