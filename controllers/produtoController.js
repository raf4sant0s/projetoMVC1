const produtoModel = require("../models/produtoModel");

/**
 * @controller ProdutoController
 * @description Intercepta as requisições HTTP das rotas principais e de produtos e orquestra as respostas.
 */

/**
 * Renderiza a página inicial (Home).
 * @param {import('express').Request} req - Objeto de Requisição do Express.
 * @param {import('express').Response} res - Objeto de Resposta do Express.
 * @returns {void} Renderiza a view 'index'.
 */
exports.home = (req, res) => {
    res.render("index", { titulo: "Home" });
};

/**
 * Renderiza a página Sobre.
 * @param {import('express').Request} req - Objeto de Requisição do Express.
 * @param {import('express').Response} res - Objeto de Resposta do Express.
 * @returns {void} Renderiza a view 'sobre'.
 */
exports.sobre = (req, res) => {
    res.render("sobre", { titulo: "Sobre" });
};

/**
 * Renderiza a página de Contato.
 * @param {import('express').Request} req - Objeto de Requisição do Express.
 * @param {import('express').Response} res - Objeto de Resposta do Express.
 * @returns {void} Renderiza a view 'contato'.
 */
exports.contato = (req, res) => {
    res.render("contato", { titulo: "Contato" });
};

/**
 * Renderiza a página de Produtos com a lista e o produto em edição (se houver).
 * @param {import('express').Request} req - Objeto de Requisição do Express. Expectativa de query param: ?editar=id
 * @param {import('express').Response} res - Objeto de Resposta do Express.
 * @returns {void} Renderiza a view 'produtos' com a lista de produtos e, opcionalmente, um produto sendo editado.
 */
exports.produtos = (req, res) => {
    const produtos = produtoModel.listar();

    let produtoEditando = null;

    if (req.query.editar) {
        produtoEditando = produtoModel.buscar(req.query.editar);
    }

    res.render("produtos", { titulo: "Produtos", produtos, produtoEditando });
};

/**
 * Cadastra um novo produto na lista.
 * @param {import('express').Request} req - Objeto de Requisição do Express contendo req.body com 'nome' e 'preco'.
 * @param {import('express').Response} res - Objeto de Resposta do Express.
 * @returns {void} Redireciona para a rota '/produtos' após o cadastro.
 */
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

/**
 * Atualiza um produto existente pelo ID.
 * @param {import('express').Request} req - Objeto de Requisição do Express contendo req.params.id e req.body.
 * @param {import('express').Response} res - Objeto de Resposta do Express.
 * @returns {void} Redireciona para a rota '/produtos' após a atualização.
 */
exports.atualizarProduto = (req, res) => {
    const id = req.params.id;
    const { nome, preco } = req.body;

    produtoModel.atualizar(id, { nome, preco: parseFloat(preco) });

    res.redirect("/produtos");
};

/**
 * Exclui um produto pelo ID.
 * @param {import('express').Request} req - Objeto de Requisição do Express contendo req.params.id.
 * @param {import('express').Response} res - Objeto de Resposta do Express.
 * @returns {void} Redireciona para a rota '/produtos' após a exclusão.
 */
exports.excluirProduto = (req, res) => {
    produtoModel.remover(req.params.id);

    res.redirect("/produtos");
};
