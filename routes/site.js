const express = require('express')
const router = express.Router

router.get('/', (req, res) => {
    res.send("Pagina inicial")
})

router.get('/lead', (req, res) => {
    res.send("Pagina lead")
})

router.get('/contato', (req, res) => {
    res.send("Pagina contato")
})

router.get('/chat', (req, res) => {
    res.send("Pagina chat")
})

module.exports = router