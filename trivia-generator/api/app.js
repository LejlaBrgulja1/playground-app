const express = require('express')
let router = require("./src/router")
const bodyParser = require('body-parser')
var cors = require('cors')

let app = express()

var corsOptions = {
  origin: 'http://localhost:3000'
}

app.use(cors(corsOptions)) 

app.use(bodyParser.json())

router.forEach(route => {
  app.use(route.path, route.handler)
});

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.info(`Server has started on ${PORT}`))