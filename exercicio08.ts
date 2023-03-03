/*8 - Crie um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas 
são:
 "Telefonou para a vítima?"
 "Esteve no local do crime?"
 "Mora perto da vítima?"
 "Devia para a vítima?"
 "Já trabalhou com a vítima?" 
O programa deve no final emitir uma classificação sobre a participação da pessoa no crime. Se 
a pessoa responder positivamente a 2 questões ela deve ser classificada como "Suspeita", 
entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como 
"Inocente".
Nome do aluno: Larissa Iaquimitro Ravanelli
e-mail: lari.iaquimitro@gmail.com
*/

console.clear();
let teclado = require ('prompt-sync')(); 
let classificacao: number = 0;

console.log(`+++++++++++++++++++++++++++++++++`);
console.log(`+Para as pergumtas abaixo,      +`);
console.log(`+seguir as seguinte orientação: +`);
console.log(`+DIGITE S - PARA SIM            +`);
console.log(`+DIGITE N - PARA NÃO            +`);
console.log(`+++++++++++++++++++++++++++++++++`);

let avaliando: string;

avaliando = teclado(`Telefonou para a vítima? -->`);
if ((avaliando === `S`)||(avaliando === `s`)){
    classificacao++;
}

avaliando = teclado(`Esteve no local do crime? -->`);
if ((avaliando === `S`)||(avaliando === `s`)){
    classificacao++;
}

avaliando = teclado(`Mora perto da vítima? -->`);
if ((avaliando === `S`)||(avaliando === `s`)){
    classificacao++;
}

avaliando = teclado(`Devia para a vítima? -->`);
if ((avaliando === `S`)||(avaliando === `s`)){
    classificacao++;
}

avaliando = teclado(`Já trabalhou com a vítima? -->`);
if ((avaliando === `S`)||(avaliando === `s`)){
    classificacao++;
}

console.log(`Clique Enter para continuar...`);
teclado();
console.clear();

if (classificacao == 2){
    console.log(`Suspeito!!`);
}
else if ((classificacao >= 3)&&(classificacao <= 4)){
    console.log(`Cúmplice!!`)
}
else if(classificacao == 5){
    console.log(`Assassino!!`);
}
else if ((classificacao >=0)&&(classificacao <=1)){
    console.log(`Inocente!!`);
}
else{
    console.log(`Algo deu errado!!`);
}