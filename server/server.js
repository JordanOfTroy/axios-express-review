const express = require('express')
const bodyParser = require('body-parser')
const ctrl = require('./controller')

const app = express()

app.use(bodyParser.json())


app.get('/api/todolist', ctrl.read)
app.post('/api/todolist', ctrl.create)

const PORT=3121
app.listen(PORT, ()=> console.log(`my server is listening on port ${PORT}`))