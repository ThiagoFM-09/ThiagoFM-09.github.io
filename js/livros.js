const livros = []

/**
 * Função para adicionar novos livros na coleção
 * @param {*} livros - array de livros
 * @param {*} livro - um novo livro
 * @returns colecao com o novo livro adicionado
 */
const add = (livros, livro) => {
    livros.push(livro)
    return livros
}

/**
 * 
 * @param {*} id 
 */
const get = id => livros.find(livro=>livro.id ==id)

/**
 * Função que pesquisa livros em uma coleção
 * @param {*} livros - a coleção
 * @param {*} termo - fragmento de título para a pesquisa
 * @returns array de livros filtrados
 */
const listLivroByTitulo = (livros, termo) => 
    livros.filter(livro => 
        livro.titulo.toLowerCase().includes(termo.toLowerCase()))

/**
 * 
 * @param {*} livros 
 * @param {*} genero 
 * @returns array de livros filtrados
 */
const listLivroByGenero = (livros, genero) =>
    livros.filter(livro => 
        livro.genero.toLowerCase().includes(genero.toLowerCase()))


const markAsLido = (livros,id) => {
    livros.forEach(livro => {
        if(livro.id === id)
            livro.lido = true;
    })
    return livros
}  

const remove = (livros, id) => {
        livros.filter(livro => livro.id !== id);
}

const estatistics = (livros) => {
    livros.length
}

// dá visibilidade a algumas funções do arquivo js.
module.exports= {add
    , remove
    , get
    , listLivroByTitulo
    , listLivroByGenero
    , markAsLido
    , estatistics
};