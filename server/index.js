const express = require('express')
const errorHandler = require('./middleware/errorHandler')
const morgan = require('morgan')

const app = express()

// log
app.use(morgan('dev'))

// request body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// CORS 
const cors = require('cors')
app.use(cors())

// route 404
app.use((req, res, next) => {
    res.status(404).send({
        error: '404, Not Found'
    })
})

// error handler middleware
app.use(errorHandler())

const port = process.env.PORT || 800
app.listen(port, () => { console.log(`Server Running at http://localhost:${port}`) })