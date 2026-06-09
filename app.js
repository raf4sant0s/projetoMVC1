const express = require('express');
const path = require('path');
const session = require('express-session');
const app = express();

const produtoRoutes = require("./routes/produtoRoutes");
const authRoutes = require("./routes/authRoutes");
const authMiddleware = require("./middlewares/auth");

// Configuração da Sessão
app.use(session({
    secret: 'segredo-super-seguro-mvc',
    resave: false,
    saveUninitialized: false,
    cookie: { 
        secure: false, // usar true se fosse HTTPS em produção
        maxAge: 1000 * 60 * 60 * 24 // Expira em 1 dia
    }
}));

// Middleware para passar a variável 'user' para todas as views
app.use((req, res, next) => {
    res.locals.user = req.session ? req.session.user : null;
    next();
});

// Middleware para servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para interpretar dados de formulários (POST)
app.use(express.urlencoded({ extended: true }));

// Configuração do EJS como view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Rotas de Autenticação (Públicas, pois o usuário precisa acessar para logar)
app.use(authRoutes);

// Aplica o Middleware de Autenticação para todas as rotas abaixo
app.use(authMiddleware);

// Rotas da aplicação (Protegidas)
app.use(produtoRoutes);

// Inicialização do servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT} - http://localhost:${PORT}`);
});