"use strict";
var anyEstaDeVolta;
var unknownValor;
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro('Deu erro', 500);
