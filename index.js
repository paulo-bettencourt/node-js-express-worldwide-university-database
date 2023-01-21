const express = require('express')
const app = express()
const port = 3000
const universitiesDatabase = require("./databases/universities-database.json")
const countriesDatabase = require("./databases/countries-database.json")
const cors = require('cors')
app.use(cors())

app.get('/:university', (req, res) => {
    const newData = universitiesDatabase.filter((data) => {
        return data.country === req.params.university
    })
    res.send(newData)
})

app.get('/countries/api', (req, res) => {
    res.send(countriesDatabase)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
