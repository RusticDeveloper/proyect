const Sequelize = require('sequelize');
var sequelize = new Sequelize('continentes', 'daniel', 'Daniel', {
    host: 'localhost',
    dialect: 'postgres',
    //solo se debe usar una base de datos por coneccion
    //'mysql' | 'mariadb' | 'sqlite' | 'postgres' | 'mssql'   *lista de dbs a usar
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    //se aunmenta esto para que no se creen columnas nuevas en las querys
    define: {
        timestamps: false
    }
    // SQLite only
    // ,storage: 'path/to/database.sqlite'
});

module.exports = sequelize;