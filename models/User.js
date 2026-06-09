const db = require('../config/database');

/**
 * @module UserModel
 * @description Gerencia as operações de busca e regras de negócio da entidade Usuário no banco de dados falso (em memória).
 */

/**
 * Busca um usuário pelo e-mail e senha.
 * @method buscarPorEmailESenha
 * @param {string} email - O endereço de e-mail do usuário.
 * @param {string} senha - A senha do usuário (em texto plano neste escopo simples).
 * @returns {Object|undefined} Retorna o objeto do usuário se encontrado, ou undefined caso as credenciais sejam inválidas.
 */
function buscarPorEmailESenha(email, senha) {
    return db.users.find(user => user.email === email && user.senha === senha);
}

module.exports = {
    buscarPorEmailESenha
};
