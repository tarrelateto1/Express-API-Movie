const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const movieRoute = require('./api/routes/movie')
const url ='mongodb+srv://tarrelateto1:Jirawat8@movie-mnh4u.mongodb.net/MyMovie?retryWrites=true&w=majority'

mongoose.connect(
    url,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
)

app.use(morgan('dev'))
app.use('/uploads', express.static('uploads'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// save ลง database (return เป็น Promise)

app.use('/test',movieRoute)

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    )
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).json({})
    }
    next()
})


app.use((req, res, next) => {
    const error = new Error('N ot found')
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app