console.clear();
const teclado = require('prompt-sync')();

let numero: number= teclado(`Digite o número:`)
let nome: string= teclado(`Digite seu nome:`)
if(numero >= 18){
   
    console.log(`O usuário ${nome} é maior de idade`)
}
else if(numero < 18){
    
    console.log(`O usuário ${nome} é menor de idade`)
}
else{
    console.log(`Algo deu errado`)
}