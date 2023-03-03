var teclado = require('prompt-sync')();
var nome;
var idade;
nome = teclado("Digite o seu nome:");
idade = teclado("Digite a idade:");
console.log("O meu nome ".concat(nome, " a idade \u00E9 ").concat(idade, "."));
