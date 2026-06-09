/**
 * @module produtoModel
 * @description Gerencia as operações em memória e regras de negócio da entidade Produto.
 * Não utiliza banco de dados conforme orientação da atividade, armazenando em um array local.
 */
let produtos = [
    { id: 1, nome: "Arroz 5kg", preco: 22.90 },
    { id: 2, nome: "Feijão 1kg", preco: 8.50 },
    { id: 3, nome: "Açúcar 1kg", preco: 5.40 }
];

/**
 * Retorna todos os produtos cadastrados.
 * @method listar
 * @returns {Array<Object>} Retorna um array de objetos representando os produtos.
 */
function listar() {
    return produtos;
}

/**
 * Adiciona um novo produto à lista.
 * @method adicionar
 * @param {Object} produto - Objeto contendo os dados do produto.
 * @param {number} produto.id - Identificador do produto.
 * @param {string} produto.nome - Nome comercial do produto.
 * @param {number} produto.preco - Preço de venda.
 * @returns {void}
 */
function adicionar(produto) {
    produtos.push(produto);
}

/**
 * Remove um produto pelo ID especificado.
 * @method remover
 * @param {number|string} id - Identificador único do produto a ser removido.
 * @returns {void}
 */
function remover(id) {
    produtos = produtos.filter(p => p.id != id);
}

/**
 * Busca um produto específico pelo seu identificador.
 * @method buscar
 * @param {number|string} id - Identificador único do produto.
 * @returns {Object|undefined} Retorna o objeto do produto encontrado ou undefined caso não exista.
 */
function buscar(id) {
    return produtos.find(p => p.id == id);
}

/**
 * Atualiza os dados de um produto existente.
 * @method atualizar
 * @param {number|string} id - Identificador do produto a ser atualizado.
 * @param {Object} novoProduto - Objeto contendo os novos dados do produto.
 * @returns {void}
 */
function atualizar(id, novoProduto) {
    const index = produtos.findIndex(p => p.id == id);
    if (index !== -1) {
        produtos[index] = { id: Number(id), ...novoProduto };
    }
}

module.exports = {
    listar,
    adicionar,
    remover,
    buscar,
    atualizar
};
