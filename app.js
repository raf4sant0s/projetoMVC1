const express = require('express');
const path = require('path');
const app = express();
const produtoRoutes = require("./routes/produtoRoutes");

// Middleware para servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para interpretar dados de formulários (POST)
app.use(express.urlencoded({ extended: true }));

// Configuração do EJS como view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Rotas da aplicação
app.use(produtoRoutes);

// Inicialização do servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT} - http://localhost:${PORT}`);
});