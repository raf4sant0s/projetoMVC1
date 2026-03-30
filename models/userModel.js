let produtos = [];

function listar() {
    return produtos;
}

function adicionar(produto) {
    produtos.push(produto);
}

function remover(id) {
    produtos = produtos.filter(p => p.id != id);
}

function buscar(id) {
    return produtos.find(p => p.id == id);
}

function atualizar(id, novoProduto) {
    const index = produtos.findIndex(p => p.id == id);
    if (index !== -1) {
        produtos[index] = { id: id, ...novoProduto };
    }
}

module.exports = {
    listar,
    adicionar,
    remover,
    buscar,
    atualizar
};