const express = require('express')
const app = express ()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true}))


app.post('/usuarios', (req, resp) => {
    resp.send('Usuário incluido')
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    resp.send('Usuário alterado!')
})

app.listen(3003)