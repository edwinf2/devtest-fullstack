import { DataTypes } from "sequelize";
import db from "../db/conexion";

const Cliente = db.define('Cliente', {
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
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },    
    edad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    tableName: 'Clientes',
    createdAt: false,
    updatedAt: false,
    timestamps: false
})

export default Cliente;