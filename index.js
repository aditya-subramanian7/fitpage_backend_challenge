const express = require("express")
const app = express()
const dotenv = require("dotenv")
dotenv.config()
const port = process.env.PORT
app.use(express.json());
var cors = require("cors");
app.use(cors(["https://localhost:3000"]));
const routes = require('./routes/router')
const bodyParser = require('body-parser')

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})