"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conexion_1 = __importDefault(require("../db/conexion"));
const Pedido = conexion_1.default.define('Pedido', {
    codigo: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: false
    },
    cantidad: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    total: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: false
    },
    imagen: {
        type: sequelize_1.DataTypes.BLOB,
    },
}, {
    tableName: 'Pedidos',
    createdAt: false,
    updatedAt: false,
    timestamps: false
});
exports.default = Pedido;
