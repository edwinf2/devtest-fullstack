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
exports.deleteCliente = exports.actualizarCliente = exports.guardarCliente = exports.getCliente = exports.getClientes = void 0;
const cliente_1 = __importDefault(require("../models/cliente"));
const getClientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listaClientes = yield cliente_1.default.findAll();
    res.json(listaClientes);
});
exports.getClientes = getClientes;
const getCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { codigo } = req.params;
    const cliente = yield cliente_1.default.findByPk(codigo);
    if (cliente) {
        res.json(cliente);
    }
    else {
        res.status(404).json({
            message: `No existe el cliente ${codigo}`
        });
    }
});
exports.getCliente = getCliente;
const guardarCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield cliente_1.default.create(body);
        res.json({
            message: "El cliente ha sido creado"
        });
    }
    catch (error) {
        console.log(error);
        console.log("Ocurrio un error!");
    }
});
exports.guardarCliente = guardarCliente;
const actualizarCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { codigo } = req.params;
    try {
        const cliente = yield cliente_1.default.findByPk(codigo);
        if (cliente) {
            yield cliente.update(body);
            res.json({
                message: "Usuario actualizado con exito"
            });
        }
        else {
            res.status(404).json({
                message: `No existe el cliente ${codigo}`
            });
        }
    }
    catch (error) {
        console.log(error);
        console.log("Ocurrio un error!");
    }
});
exports.actualizarCliente = actualizarCliente;
const deleteCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { codigo } = req.params;
    const cliente = yield cliente_1.default.findByPk(codigo);
    if (!cliente) {
        res.status(404).json({
            message: `No existe el cliente ${codigo}`
        });
    }
    else {
        yield cliente.destroy();
        res.json({
            message: "El cliente fue eliminado con exito"
        });
    }
});
exports.deleteCliente = deleteCliente;
