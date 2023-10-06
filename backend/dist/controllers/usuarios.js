"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuario = exports.actualizarUsuario = exports.guardarUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listaUsuarios = yield usuario_1.default.findAll();
    res.json(listaUsuarios);
});
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { codigo } = req.params;
    const usuario = yield usuario_1.default.findByPk(codigo);
    if (usuario) {
        res.json(usuario);
    }
    else {
        res.status(404).json({
            message: `No existe el usuario ${codigo}`
        });
    }
});
exports.getUsuario = getUsuario;
const guardarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield usuario_1.default.create(body);
        res.json({
            message: "El Usuario ha sido creado"
        });
    }
    catch (error) {
        console.log(error);
        console.log("Ocurrio un error!");
    }
});
exports.guardarUsuario = guardarUsuario;
const actualizarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { codigo } = req.params;
    try {
        const usuario = yield usuario_1.default.findByPk(codigo);
        if (usuario) {
            yield usuario.update(body);
            res.json({
                message: "Usuario actualizado con exito"
            });
        }
        else {
            res.status(404).json({
                message: `No existe el usuario ${codigo}`
            });
        }
    }
    catch (error) {
        console.log(error);
        console.log("Ocurrio un error!");
    }
});
exports.actualizarUsuario = actualizarUsuario;
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { codigo } = req.params;
    const usuario = yield usuario_1.default.findByPk(codigo);
    if (!usuario) {
        res.status(404).json({
            message: `No existe el usuario ${codigo}`
        });
    }
    else {
        yield usuario.destroy();
        res.json({
            message: "El usuario fue eliminado con exito"
        });
    }
});
exports.deleteUsuario = deleteUsuario;
