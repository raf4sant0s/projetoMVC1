const express = require('express');
const path = require('path');
const app = express();
const userRoutes = require("./routes/userRoutes");
const bodyParser = require("body-parser");

// Configura a pasta 'public' como estática
app.use(express.static(path.join(__dirname, 'public')));

app.set("views", caminho.join(__dirname, "projeto-mvc", "views"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(userRoutes);


app.listen(3000, () => console.log("Servidor rodando na porta 3000 http://localhost:3000"));