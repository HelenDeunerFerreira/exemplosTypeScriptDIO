let anyEstaDeVolta: any //evitar usar, será sempre any
let unknownValor: unknown //é necessário fazer validação com if e typeof antes de usar

function jogaErro(erro: string, codigo: number): never { // tipo never: o código nunca é finalizado, ele é interrompido
    throw { error: erro, code: codigo }
}

jogaErro('Deu erro', 500)