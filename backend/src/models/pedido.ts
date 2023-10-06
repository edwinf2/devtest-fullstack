import { DataTypes } from "sequelize";
import db from "../db/conexion";

const Pedido = db.define('Pedido', {
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
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    total: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    imagen: {
        type: DataTypes.BLOB,        
    },
}, {
    tableName: 'Pedidos',
    createdAt: false,
    updatedAt: false,
    timestamps: false
})

export default Pedido;