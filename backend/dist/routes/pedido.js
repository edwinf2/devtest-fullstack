"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pedido_1 = require("../controllers/pedido");
const routerPedido = (0, express_1.Router)();
//Usuarios
routerPedido.get('/', pedido_1.getPedidos);
routerPedido.get('/:codigo', pedido_1.getPedido);
routerPedido.post('/', pedido_1.guardarPedido);
routerPedido.put('/:codigo', pedido_1.actualizarPedido);
routerPedido.delete('/:codigo', pedido_1.deletePedido);
exports.default = routerPedido;
