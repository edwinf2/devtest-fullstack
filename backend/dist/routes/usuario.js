"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_1 = require("../controllers/usuarios");
const routerUsuario = (0, express_1.Router)();
//Usuarios
routerUsuario.get('/', usuarios_1.getUsuarios);
routerUsuario.get('/:codigo', usuarios_1.getUsuario);
routerUsuario.post('/', usuarios_1.guardarUsuario);
routerUsuario.put('/:codigo', usuarios_1.actualizarUsuario);
routerUsuario.delete('/:codigo', usuarios_1.deleteUsuario);
exports.default = routerUsuario;
