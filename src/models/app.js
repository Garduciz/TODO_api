const express = require("express");
const exp = require("express");
const app = exp();
const bd = require("../infra/db-sqlite")

const tarefas_controller = require( '../controllers/tarefas_controller');
const usuario_controller = require ('../controllers/usuario_controller');

const Usuario = require("./usuario-models");
const Tarefa = require("./tarefas-models");
//const novoUsuario = new Usuario("Breno", "garduci@example.com", "1234");
//const novoUsuari = new Usuario("Breno", "garduci@example.com", "1234");
const tarefa = new Tarefa("Teste", "testando", "em andamento")

app.use(express.json());

//console.log(tarefa);
//console.log(novoUsuario);
//console.log(novoUsuari);

tarefas_controller(app, bd);
usuario_controller(app, bd);

app.listen(3002, () => {
  console.log("Funciona")
});