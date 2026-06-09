# 🚀 Projeto MVC: Sistema de Gestão de Produtos

![GitHub repo size](https://img.shields.io/github/repo-size/raf4sant0s/projetoMVC1)
![GitHub language count](https://img.shields.io/github/languages/count/raf4sant0s/projetoMVC1)
![Node Version](https://img.shields.io/node/v/express)

Um sistema web desenvolvido com foco nas melhores práticas da arquitetura **MVC (Model-View-Controller)**. O projeto conta com um controle de acesso seguro, gerenciamento de sessões e operações de manipulação de dados em memória.

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes ferramentas:
* **Runtime:** Node.js
* **Framework Web:** Express
* **Motor de Templates (View Engine):** EJS
* **Sessão e Segurança:** express-session
* **Estilização:** CSS Customizado

---

## ✨ Funcionalidades Principais

- [x] **Autenticação:** Sistema de login seguro protegendo o acesso não autorizado.
- [x] **Controle de Rotas Privadas:** Middlewares (`auth.js`) para interceptar e validar requisições protegidas, redirecionando anônimos.
- [x] **Gerenciamento de Sessão:** Persistência do estado de login através de cookies (`express-session`) e funcionalidade completa de *Logout*.
- [x] **Gestão de Produtos:** Listagem de produtos mantidos em memória de forma estruturada.
- [x] **Arquitetura Modular:** Código totalmente separado em Modelos (`models`), Views (`views`) e Controladores (`controllers`).

---

## 📦 Como Executar o Projeto

### 📋 Pré-requisitos
Antes de começar, você precisará ter instalado em sua máquina:
* Git
* Node.js (Versão 16 ou superior recomendada)

### 🔧 Passos para Instalação

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

### 🔑 Configuração e Credenciais

Não é necessário configurar variáveis de ambiente complexas para rodar localmente. O projeto já inclui dados simulados de um usuário.

Para efetuar login e testar o controle de rotas da aplicação, utilize:
* **E-mail:** `admin@email.com`
* **Senha:** `senha123`

### 🚀 Inicialização

Para rodar a aplicação em ambiente de desenvolvimento (com auto-reload do servidor), execute o comando:

```bash
npm run dev
```

Caso queira executar de forma padrão:
```bash
npm start
```

O servidor será iniciado na porta 3000. Você pode acessar e testar a aplicação em:

📌 **http://localhost:3000**

---

## ✒️ Autores

- **Rafael Santos (raf4sant0s)** - *Desenvolvimento Back-end / MVC* - [GitHub](https://github.com/raf4sant0s)
