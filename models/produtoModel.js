// Lista de produtos armazenada em memória (array)
// Não utiliza banco de dados conforme orientação da atividade
let produtos = [
    { id: 1, nome: "Arroz 5kg", preco: 22.90 },
    { id: 2, nome: "Feijão 1kg", preco: 8.50 },
    { id: 3, nome: "Açúcar 1kg", preco: 5.40 }
];

// Retorna todos os produtos cadastrados
function listar() {
    return produtos;
}

// Adiciona um novo produto à lista
function adicionar(produto) {
    produtos.push(produto);
}

// Remove um produto pelo ID
function remover(id) {
    produtos = produtos.filter(p => p.id != id);
}

// Busca um produto específico pelo ID
function buscar(id) {
    return produtos.find(p => p.id == id);
}

// Atualiza os dados de um produto existente
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
