var verdadeiro = true;
var falso = false;
if (falso && falso && falso) {
    console.log("Condi\u00E7\u00E3o l\u00F3gica de 0 e 0 e 0 \u00E9 ".concat(falso));
}
if (falso && verdadeiro && falso) {
    console.log("Condi\u00E7\u00E3o l\u00F3gica de 0 e 1 e 0 \u00E9 ".concat(falso));
}
if (verdadeiro && falso && verdadeiro) {
    console.log("Condi\u00E7\u00E3o l\u00F3gica de 1 e 0 e 1 \u00E9 ".concat(falso));
}
if (verdadeiro && verdadeiro && verdadeiro) {
    console.log("Condi\u00E7\u00E3o l\u00F3gica de 1 e 1 e 1 \u00E9 ".concat(verdadeiro));
}
else {
    console.log("Algo deu errado!!");
}
