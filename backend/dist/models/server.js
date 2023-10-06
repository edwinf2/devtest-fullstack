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
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const conexion_1 = __importDefault(require("../db/conexion"));
const usuario_1 = __importDefault(require("../routes/usuario"));
const cliente_1 = __importDefault(require("../routes/cliente"));
const pedido_1 = __importDefault(require("../routes/pedido"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.middlewares();
        this.routes();
        this.dbConexion();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on port ${this.port} `);
        });
    }
    routes() {
        this.app.get('/', (req, res) => {
            res.json({
                message: 'Listening on port'
            });
        });
        this.app.use("/api/usuarios", usuario_1.default);
        this.app.use("/api/clientes", cliente_1.default);
        this.app.use("/api/pedidos", pedido_1.default);
    }
    middlewares() {
        //parsear el body
        this.app.use(express_1.default.json());
        this.app.disable("x-powered-by");
        //cors
        this.app.use((0, cors_1.default)());
    }
    dbConexion() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield conexion_1.default.authenticate();
                console.log('Base de datos conectada');
            }
            catch (error) {
                console.log(error);
                console.log("Error al conectarse a la bd");
            }
        });
    }
}
exports.Server = Server;
