console.clear();
const teclado = require ('prompt-sync')();

let lado1: number;
let lado2: number;
let lado3: number;

lado1 = parseFloat(teclado(`Digite o primeiro do triângulo:`));
lado2 = parseFloat(teclado(`Digite o segunod lado do triângulo:`));
lado3 = parseFloat(teclado(`Digite o terceiro lado do triângulo:`));

if (Number.isNaN(lado1)|| Number.isNaN(lado2) || Number.isNaN(lado3)){
    console.log(`Entrada com caracteres, utilize número`);
}

else if ((lado1 == lado2) && (lado2 == lado3)){
console.log(`Os três lados iguais Equilátero`);
}
else if ((lado1 == lado2) || (lado1 == lado3) || (lado3 == lado2)){
    if ((lado1 !== lado2)||(lado2 !==lado3)||(lado2 !== lado3)){
        console.log(`Dois lados iguais Isócele`);    
    }
    else{
        console.log(`Algo deu errado!`)
    }
}
else if ((lado1 !== lado2) && (lado1 !== lado3) && (lado2 !== lado3)){
    console.log(`Os três lados diferentes Escaleno`)
}
else{
    console.log(`Algo deu errado!`)
}