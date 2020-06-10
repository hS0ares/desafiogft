const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
//const site = require('./routes/site')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')


app.use(express.static(path.join(__dirname, "public")))

app.get('/', (req, res) => {
    res.render("site/index")
})

app.get('/lead', (req, res) => {
    res.render("site/lead")
})

app.get('/contato', (req, res) => {
    res.render("site/contato")
})

app.get('/chat', (req, res) => {
    res.render("site/chat")
})


//app.use('/site', site)

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log('Servidor rodando')
}) 