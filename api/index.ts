require("dotenv").config()

const express = require("express")
const app = express()
const { sql } = require("@vercel/postgres")

const bodyParser = require("body-parser")
const path = require("path")

// Create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static("public"))

app.get("/", (req, res) => {
  res.send("ITS WORKING")
})

const PORT = process.env.PORT
app.listen(80, () => console.log(`Server ready on port${PORT}.`))

module.exports = app
