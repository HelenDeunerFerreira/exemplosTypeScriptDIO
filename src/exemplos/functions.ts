type input = number | string;

function somarValores(input1: input, input2: input) {
    if (typeof input1 === 'string' || typeof input2 === 'string') {
        return input1.toString() + input2.toString()
    } else {
        return input1 + input2
    }
}

console.log(somarValores(1, 5))
console.log(somarValores('olá, ', 'tudo bem?'))
console.log(somarValores('1', 5))

function somarValoresNumericos(input1: number, input2: number): number { //colocar o tipo esperado do retorno 
    return input1 + input2
}

console.log(somarValoresNumericos(1, 7))

function printaValoresNumericos(input1: number, input2: number): void { //funções que não retornam nada são do tipo void
    console.log(input1 + input2)
}

//funções com callback
function somarValoresNumericosETratar(input1: number, input2: number, callback: (numero: number) => number): number {
    let resultado = input1 + input2
    return callback(resultado)
}

function aoQuadrado(numero: number): number {
    return numero * numero
}

function dividirPorEleMesmo(numero: number): number {
    return numero / numero
}

console.log(somarValoresNumericosETratar(1, 3, aoQuadrado))
console.log(somarValoresNumericosETratar(1, 3, dividirPorEleMesmo))