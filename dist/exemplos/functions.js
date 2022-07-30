"use strict";
function somarValores(input1, input2) {
    if (typeof input1 === 'string' || typeof input2 === 'string') {
        return input1.toString() + input2.toString();
    }
    else {
        return input1 + input2;
    }
}
console.log(somarValores(1, 5));
console.log(somarValores('olá, ', 'tudo bem?'));
console.log(somarValores('1', 5));
function somarValoresNumericos(input1, input2) {
    return input1 + input2;
}
console.log(somarValoresNumericos(1, 7));
function printaValoresNumericos(input1, input2) {
    console.log(input1 + input2);
}
function somarValoresNumericosETratar(input1, input2, callback) {
    var resultado = input1 + input2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
function dividirPorEleMesmo(numero) {
    return numero / numero;
}
console.log(somarValoresNumericosETratar(1, 3, aoQuadrado));
console.log(somarValoresNumericosETratar(1, 3, dividirPorEleMesmo));
