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
var teclado = require('prompt-sync')();
var classificacao = 0;
console.log("+++++++++++++++++++++++++++++++++");
console.log("+Para as pergumtas abaixo,      +");
console.log("+seguir as seguinte orienta\u00E7\u00E3o: +");
console.log("+DIGITE S - PARA SIM            +");
console.log("+DIGITE N - PARA N\u00C3O            +");
console.log("+++++++++++++++++++++++++++++++++");
var avaliando;
avaliando = teclado("Telefonou para a v\u00EDtima? -->");
if ((avaliando === "S") || (avaliando === "s")) {
    classificacao++;
}
avaliando = teclado("Esteve no local do crime? -->");
if ((avaliando === "S") || (avaliando === "s")) {
    classificacao++;
}
avaliando = teclado("Mora perto da v\u00EDtima? -->");
if ((avaliando === "S") || (avaliando === "s")) {
    classificacao++;
}
avaliando = teclado("Devia para a v\u00EDtima? -->");
if ((avaliando === "S") || (avaliando === "s")) {
    classificacao++;
}
avaliando = teclado("J\u00E1 trabalhou com a v\u00EDtima? -->");
if ((avaliando === "S") || (avaliando === "s")) {
    classificacao++;
}
console.log("Clique Enter para continuar...");
teclado();
console.clear();
if (classificacao == 2) {
    console.log("Suspeito!!");
}
else if ((classificacao >= 3) && (classificacao <= 4)) {
    console.log("C\u00FAmplice!!");
}
else if (classificacao == 5) {
    console.log("Assassino!!");
}
else if ((classificacao >= 0) && (classificacao <= 1)) {
    console.log("Inocente!!");
}
else {
    console.log("Algo deu errado!!");
}
