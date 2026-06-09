const User = require('../models/User');

function showLogin(req, res) {
    // Se o usuário já estiver logado, manda pro home
    if (req.session && req.session.user) {
        return res.redirect('/');
    }
    res.render('login', { titulo: 'Login', erro: null });
}

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
