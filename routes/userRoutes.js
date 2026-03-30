const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.home);

router.get("/sobre", userController.sobre);

router.get("/contato", userController.contato);

router.get("/produtos", userController.produtos);

router.post("/produtos", userController.cadastrarProduto);

router.get("/excluir/:id", userController.excluirProduto);

module.exports = router;