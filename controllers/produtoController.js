const produtoModel = require("../models/produtoModel");

// Renderiza a página inicial (Home)
exports.home = (req, res) => {
    res.render("index", { titulo: "Home" });
};

// Renderiza a página Sobre
exports.sobre = (req, res) => {
    res.render("sobre", { titulo: "Sobre" });
};

// Renderiza a página de Contato
exports.contato = (req, res) => {
    res.render("contato", { titulo: "Contato" });
};

// Renderiza a página de Produtos com a lista e o produto em edição (se houver)
exports.produtos = (req, res) => {
    const produtos = produtoModel.listar();

    let produtoEditando = null;

    if (req.query.editar) {
        produtoEditando = produtoModel.buscar(req.query.editar);
    }

    res.render("produtos", { titulo: "Produtos", produtos, produtoEditando });
};

// Cadastra um novo produto na lista
exports.cadastrarProduto = (req, res) => {
    const { nome, preco } = req.body;

    const produto = {
        id: Date.now(),
        nome,
        preco: parseFloat(preco)
    };

    produtoModel.adicionar(produto);

    res.redirect("/produtos");
};

// Atualiza um produto existente pelo ID
exports.atualizarProduto = (req, res) => {
    const id = req.params.id;
    const { nome, preco } = req.body;

    produtoModel.atualizar(id, { nome, preco: parseFloat(preco) });

    res.redirect("/produtos");
};

// Exclui um produto pelo ID
exports.excluirProduto = (req, res) => {
    produtoModel.remover(req.params.id);

    res.redirect("/produtos");
};
