//Importa os frameworks e middlewares
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser');

const routes = require('./routes')

const app = express()

//Porta da conexão
const port = 3001

app.use(morgan('Zscan'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

routes(app)

app.listen(port, () => console.log(`servidor subiu em ${port}`))
