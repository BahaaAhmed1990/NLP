var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
dotenv.config();
const axios = require('axios')
const cors = require('cors')

const app = express()

app.use(express.static('dist'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

// console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(544, function () {
    console.log('Example app listening on port 544!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.get('/text/*', (request,response) =>{
    axios.get('https://api.meaningcloud.com/sentiment-2.1?key='+process.env.API_KEY+'&url='+request.params[0]+'&lang=en').then((res) => {response.send(res.data);})
    
})

