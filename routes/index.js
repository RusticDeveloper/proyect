const rutas = require('express').Router();
const Sequelize = require('sequelize');


//sequelize
const sequelize = new Sequelize('caama', 'daniel', 'Daniel', {
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
});
sequelize
    .authenticate()
    .then(function(err) {
        console.log('Connection has been established successfully.');
    }, function(err) {
        console.log('Unable to connect to the database:', err);
    });
const usuarios = sequelize.define('usuarios', {
    usuario: { type: Sequelize.STRING, primaryKey: true },
    nombre: Sequelize.STRING,
    apellido: Sequelize.STRING,
    apodo: Sequelize.STRING
});

// usuarios.findAll({ attributes: ['nombre', 'apellido', 'apodo'] })
//     .then(users => {

//             //console.log(users[0].dataValues.nombrepais)
//     })
//     .catch(err => {
//         console.log(err)
//     });


rutas.post('/cosa', (req, res) => {

    usuarios.create({
        usuario: ('cl' + req.body.Alias),
        nombre: req.body.Nombre,
        apellido: req.body.Apellido,
        apodo: req.body.Alias
    })
    console.log(req.body);
    // res.send(req.body);
    //res.sendFile(path.join(__dirname, '../views/pagina.html'), { valores: req })
})
rutas.post('/buscar', (req, res) => {

    usuarios.findAll({})
        .then(users => {
            res.send(users)
        })
        .catch(err => {
            console.log(err)
        });
    console.log(req.body);
    //res.send(req.body);
    //res.sendFile(path.join(__dirname, '../views/pagina.html'), { valores: req })
})

rutas.get('/', (req, res) => {
    res.render('./login/index.html')
})

rutas.get('/puzzle', (req, res) => {
    res.render('./Puzzle/index.html')
})
rutas.get('/soup', (req, res) => {
    res.render('./Sopa/index.html')
})
rutas.get('/tile', (req, res) => {
    res.redirect('./login/games.html')
})


module.exports = rutas;