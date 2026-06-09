# Projeto MVC: API de Gestão de Produtos

![GitHub repo size](https://img.shields.io/github/repo-size/raf4sant0s/projetoMVC1)
![GitHub language count](https://img.shields.io/github/languages/count/raf4sant0s/projetoMVC1)
![Node Version](https://img.shields.io/node/v/express)

Uma API robusta para gestão de produtos construída com base no padrão arquitetural MVC (Model-View-Controller) utilizando Node.js e Express.
O sistema oferece controle de acesso seguro, autenticação baseada em sessão com cookies e gerenciamento de inventário.
Sua estrutura modularizada facilita a manutenção, separando claramente as regras de negócio, lógica de banco de dados e rotas.

##  Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes ferramentas:
* **Runtime:** Node.js
* **Framework Web:** Express
* **Motor de Templates (View Engine):** EJS
* **Sessão e Segurança:** express-session
* **Estilização:** CSS Customizado

---

##  Funcionalidades Principais

- [x] **Autenticação:** Sistema de login seguro protegendo o acesso não autorizado.
- [x] **Controle de Rotas Privadas:** Middlewares (`auth.js`) para interceptar e validar requisições protegidas, redirecionando anônimos.
- [x] **Gerenciamento de Sessão:** Persistência do estado de login através de cookies (`express-session`) e funcionalidade completa de *Logout*.
- [x] **Gestão de Produtos:** Listagem de produtos mantidos em memória de forma estruturada.
- [x] **Arquitetura Modular:** Código totalmente separado em Modelos (`models`), Views (`views`) e Controladores (`controllers`).

---

##  Como Executar o Projeto

###  Pré-requisitos
Antes de começar, você precisará ter instalado em sua máquina:
* Git
* Node.js (Versão 16 ou superior recomendada)

###  Passos para Instalação

1. Clone este repositório para a sua máquina local:
```bash
git clone https://github.com/raf4sant0s/projetoMVC1.git
```

2. Navegue até o diretório do projeto:
```bash
cd projetoMVC1
```

3. Instale todas as dependências necessárias:
```bash
npm install
```

### Variáveis de Ambiente (.env)

Para rodar a aplicação localmente e configurar corretamente as integrações, crie um arquivo `.env` na raiz do projeto com a seguinte estrutura de exemplo (não inclua suas senhas reais):

```env
# Configurações do Servidor
PORT=3000
NODE_ENV=development

# Configurações de Segurança e Sessão
SESSION_SECRET=sua_chave_secreta_aqui

# Configurações de Banco de Dados (Exemplo para MySQL)
DB_HOST=localhost
DB_USER=root
DB_PASS=senha_forte_do_banco
DB_NAME=ecommerce_db
```

*Nota: Para efetuar login na versão atual do protótipo e testar as rotas privadas, utilize os dados fictícios:*
* **E-mail:** `admin@email.com`
* **Senha:** `senha123`

###  Inicialização

Para rodar a aplicação em ambiente de desenvolvimento (com auto-reload do servidor), execute o comando:

```bash
npm run dev
```

Caso queira executar de forma padrão:
```bash
npm start
```

O servidor será iniciado na porta 3000. Você pode acessar e testar a aplicação em:

 --> **http://localhost:3000**

---------------------------------

Autor

- **Rafaela Santos (raf4sant0s)** - *Desenvolvimento Back-end / MVC* - [GitHub](https://github.com/raf4sant0s)
