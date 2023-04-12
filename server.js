
const express = require('express')
const bodyParser= require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb+srv://worleydev:newApp@cluster0.4vxkn2o.mongodb.net/?retryWrites=true&w=majority', {
    useUnifiedTopology: true},
    (err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database')
})

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3000, function() {
    console.log('listening on 3000')
})

// app.get('/', (req, res) => {
//     res.send('Hello World')
// })

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
    console.log(req.body)
})

app.post('/quotes', (req, res) => {
    console.log(req.body)
})