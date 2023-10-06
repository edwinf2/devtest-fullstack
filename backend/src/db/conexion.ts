import { Sequelize } from "sequelize";

const db = new Sequelize('devtest', 'user', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;