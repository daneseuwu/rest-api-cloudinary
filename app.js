const express = require('express')
const colors = require('colors')
const morgan = require('morgan')
const { conn } = require('./config/mongo')
const router = require('./route/route')
const cors = require('cors')

require('dotenv').config()
const app = express()
app.use(morgan('dev'))

app.use(express.json())

const whiteList = ['http://localhost:3000']

app.use(cors({ origin: whiteList }))

app.use('/api/v1', router)

app.get('/', (req, res) => {
    res.redirect('api/v1/product')
})

conn()
const port = process.env.port || 8000
app.listen(port, () => {

    try {
        console.log(colors.blue(`Server listening successfully on port http://localhost:${port}`))

    } catch (error) {
        console.log(colors.red('Failed to listen on server port:', error))
    }

})