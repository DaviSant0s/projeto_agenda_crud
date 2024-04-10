const { Router } = require('express');

const userController = require('../controllers/users.controller');

const routes = Router();

// listagem
routes.get("/users", userController.list);

// criação
routes.post("/users", userController.create);

//consultar um usuário
routes.get("/users/:id", userController.getById);

//editar
routes.put("/users/:id", userController.update);

//delete
routes.delete("/users/:id", userController.remove);

module.exports = routes;