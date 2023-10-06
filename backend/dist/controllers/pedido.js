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
exports.deletePedido = exports.actualizarPedido = exports.guardarPedido = exports.getPedido = exports.getPedidos = void 0;
const pedido_1 = __importDefault(require("../models/pedido"));
const getPedidos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listaPedidos = yield pedido_1.default.findAll();
    res.json(listaPedidos);
});
exports.getPedidos = getPedidos;
const getPedido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { codigo } = req.params;
    const pedido = yield pedido_1.default.findByPk(codigo);
    if (pedido) {
        res.json(pedido);
    }
    else {
        res.status(404).json({
            message: `No existe el pedido ${codigo}`
        });
    }
});
exports.getPedido = getPedido;
const guardarPedido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield pedido_1.default.create(body);
        res.json({
            message: "El pedido ha sido creado"
        });
    }
    catch (error) {
        console.log(error);
        console.log("Ocurrio un error!");
    }
});
exports.guardarPedido = guardarPedido;
const actualizarPedido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { codigo } = req.params;
    try {
        const pedido = yield pedido_1.default.findByPk(codigo);
        if (pedido) {
            yield pedido.update(body);
            res.json({
                message: "pedido actualizado con exito"
            });
        }
        else {
            res.status(404).json({
                message: `No existe el pedido ${codigo}`
            });
        }
    }
    catch (error) {
        console.log(error);
        console.log("Ocurrio un error!");
    }
});
exports.actualizarPedido = actualizarPedido;
const deletePedido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { codigo } = req.params;
    const pedido = yield pedido_1.default.findByPk(codigo);
    if (!pedido) {
        res.status(404).json({
            message: `No existe el pedido ${codigo}`
        });
    }
    else {
        yield pedido.destroy();
        res.json({
            message: "El pedido fue eliminado con exito"
        });
    }
});
exports.deletePedido = deletePedido;
