const express = require("express");
const router = express.Router();
const produtoController = require("../controllers/produtoController");

// Rotas das páginas principais
router.get("/", produtoController.home);
router.get("/sobre", produtoController.sobre);
router.get("/contato", produtoController.contato);

// Rotas do CRUD de produtos
router.get("/produtos", produtoController.produtos);
router.post("/produtos", produtoController.cadastrarProduto);

router.get("/editar/:id", (req, res) => {
    res.redirect("/produtos?editar=" + req.params.id);
});

router.post("/atualizar/:id", produtoController.atualizarProduto);
router.get("/excluir/:id", produtoController.excluirProduto);

module.exports = router;
