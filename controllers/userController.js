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
    res.render("produtos", { produtos });
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

exports.excluirProduto = (req, res) => {
    const id = req.params.id;

    userModel.remover(id);

    res.redirect("/produtos");
};