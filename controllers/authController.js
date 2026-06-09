const User = require('../models/User');

/**
 * @controller AuthController
 * @description Intercepta e gerencia as requisições HTTP referentes à autenticação de usuários (login, logout).
 */

/**
 * Exibe a página de login para o usuário, caso ele não esteja autenticado.
 * @param {import('express').Request} req - Objeto de Requisição do Express.
 * @param {import('express').Response} res - Objeto de Resposta do Express.
 * @returns {void} Renderiza a view 'login' ou redireciona para '/' se já estiver logado.
 */
function showLogin(req, res) {
    // Se o usuário já estiver logado, manda pro home
    if (req.session && req.session.user) {
        return res.redirect('/');
    }
    res.render('login', { titulo: 'Login', erro: null });
}

/**
 * Processa a tentativa de login de um usuário através de e-mail e senha.
 * @param {import('express').Request} req - Objeto de Requisição do Express contendo req.body.email e req.body.senha.
 * @param {import('express').Response} res - Objeto de Resposta do Express.
 * @returns {void} Redireciona para '/' em caso de sucesso ou renderiza 'login' com mensagem de erro.
 */
function processLogin(req, res) {
    const { email, senha } = req.body;
    
    const user = User.buscarPorEmailESenha(email, senha);
    
    if (user) {
        // Autenticação com sucesso, armazena dados na sessão
        req.session.user = {
            id: user.id,
            email: user.email
        };
        // Redireciona para a página inicial (Home)
        res.redirect('/');
    } else {
        // Falha no login
        res.render('login', { titulo: 'Login', erro: 'E-mail ou senha inválidos.' });
    }
}

/**
 * Processa a saída do usuário (Logout), destruindo a sessão.
 * @param {import('express').Request} req - Objeto de Requisição do Express.
 * @param {import('express').Response} res - Objeto de Resposta do Express.
 * @returns {void} Destrói a sessão, limpa os cookies de sessão e redireciona para '/login'.
 */
function processLogout(req, res) {
    if (req.session) {
        req.session.destroy((err) => {
            if (err) {
                console.error('Erro ao destruir sessão:', err);
            }
            // Limpa o cookie do navegador definindo uma data de expiração no passado (opcional, mas boa prática)
            res.clearCookie('connect.sid');
            res.redirect('/login');
        });
    } else {
        res.redirect('/login');
    }
}

module.exports = {
    showLogin,
    processLogin,
    processLogout
};
