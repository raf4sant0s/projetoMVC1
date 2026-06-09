function authMiddleware(req, res, next) {
    // Se a sessão existir e o usuário estiver logado, permite o acesso à próxima rota
    if (req.session && req.session.user) {
        return next();
    }
    // Caso contrário, redireciona para a página de login
    res.redirect('/login');
}

module.exports = authMiddleware;
