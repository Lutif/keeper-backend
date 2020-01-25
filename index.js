const express = require("express");
const bodyParser = require("body-parser");

const app = express()
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/api/name', (req, res) => {

    res.end(JSON.stringify({data:"Keepr app is working for you !!"}))
})

app.listen(3002,()=>console.log('Server started at port 3002'))