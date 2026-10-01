const livros = [];

const adicionar = (colecao, livro) => {
    colecao.push(livro)
    return colecao;
}

const listar = id => {

}

const pesquisar = (colecao, termo) => {
    return colecao.find(livro => livro.titulo.toLowerCase() == termo.toLowerCase())
}

const filtrar = genero => {

}

const lido = id => {

}

const remover = id => {

}

const estatísticas = () => {

}

module.exports = {adicionar, pesquisar};