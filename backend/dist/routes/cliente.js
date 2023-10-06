"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cliente_1 = require("../controllers/cliente");
const routerCliente = (0, express_1.Router)();
//Clientes
routerCliente.get('/', cliente_1.getClientes);
routerCliente.get('/:codigo', cliente_1.getCliente);
routerCliente.post('/', cliente_1.guardarCliente);
routerCliente.put('/:codigo', cliente_1.actualizarCliente);
routerCliente.delete('/:codigo', cliente_1.deleteCliente);
exports.default = routerCliente;
