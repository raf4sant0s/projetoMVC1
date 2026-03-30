const userModel = require("../models/userModel");

exports.home = (req, res) => {
    res.render("index");
};

exports.sobre = (req, res) => {
    res.render("sobre");
};

exports.contato = (req, res) => {
    res.render("contato");
};

exports.produtos = (req, res) => {

    const produtos = userModel.listar();

    let produtoEditando = null;

    if (req.query.editar) {
        produtoEditando = userModel.buscar(req.query.editar);
    }

    res.render("produtos", { produtos, produtoEditando });

};

exports.cadastrarProduto = (req, res) => {

    const { nome, preco } = req.body;

    const produto = {
        id: Date.now(),
        nome,
        preco
    };

    userModel.adicionar(produto);

    res.redirect("/produtos");
};

exports.atualizarProduto = (req, res) => {

    const id = req.params.id;
    const { nome, preco } = req.body;

    userModel.atualizar(id, { nome, preco });

    res.redirect("/produtos");
};

exports.excluirProduto = (req, res) => {

    userModel.remover(req.params.id);

    res.redirect("/produtos");
};