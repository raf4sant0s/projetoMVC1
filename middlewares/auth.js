/**
 * Middleware de Autenticação.
 * Intercepta as requisições para rotas protegidas e verifica se há uma sessão de usuário ativa.
 * @param {import('express').Request} req - Objeto de Requisição do Express.
 * @param {import('express').Response} res - Objeto de Resposta do Express.
 * @param {import('express').NextFunction} next - Função callback para prosseguir no pipeline do Express.
 * @returns {void} Chama o próximo middleware ou redireciona para a rota '/login'.
 */
function authMiddleware(req, res, next) {
    // Se a sessão existir e o usuário estiver logado, permite o acesso à próxima rota
    if (req.session && req.session.user) {
        return next();
    }
    // Caso contrário, redireciona para a página de login
    res.redirect('/login');
}

module.exports = authMiddleware;
