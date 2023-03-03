console.clear();
const teclado = require ('prompt-sync')();

let lado1: number= teclado(`Digite o primeiro do triângulo:`);
let lado2: number= teclado(`Digite o segunod lado do triângulo:`);
let lado3: number= teclado(`Digite o terceiro lado do triângulo:`);

if((lado1 == lado2) && (lado2 == lado3)){

    console.log(`O triângulo é um Equilátero`);
}
else if((lado1 !== lado2) && (lado2 == lado3)){

    console.log(`O triângulo é um Isóceles`);
}
else if((lado1 == lado2) && (lado2 !== lado3)){

    console.log(`O triângulo é um Isóceles`);
}
else if((lado1 == lado3) && (lado3 !== lado2)){
    console.log(`Otriângulo é um Isóceles`)
}
else if((lado1 !== lado2) && (lado2 !== lado3)){

console.log(`O triângulo é um Escaleno`);
}

else{
    console.log(`Algo deu errado!`)
}