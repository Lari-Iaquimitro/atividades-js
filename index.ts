const teclado = require('prompt-sync')();
let nome: string;
let idade: Number;

nome = teclado(`Digite o seu nome:`);
idade = teclado(`Digite a idade:`)

console.log(`O meu nome ${nome} a idade é ${idade}.`);