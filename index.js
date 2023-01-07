const express = require('express')
const app = express()
const port = 5000;
const bodyParse = require('body-parser')
const Sequelize = require('sequelize');
//settings
app.set('view engine', 'html')
app.engine('html', require('pug').renderFile);
app.use(express.static('views'))
app.use(bodyParse.json())
    //routes
app.use(require('./routes/index'))

//APi
app.listen(port, () => {
    console.log('el programita esta estafuncionando en el el puerto:', port)
})