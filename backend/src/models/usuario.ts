import { DataTypes } from "sequelize";
import db from "../db/conexion";

const Usuario = db.define('Usuario', {
    codigo: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    usuario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'Usuarios',
    createdAt: false,
    updatedAt: false,
    timestamps: false
})

export default Usuario;