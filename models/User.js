const db = require('../config/database');

function buscarPorEmailESenha(email, senha) {
    return db.users.find(user => user.email === email && user.senha === senha);
}

module.exports = {
    buscarPorEmailESenha
};
