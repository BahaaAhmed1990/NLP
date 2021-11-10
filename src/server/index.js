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
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/text', (request,response) =>{
    // console.log(request)
    const { body: { url } } = request;
    axios.post('https://api.meaningcloud.com/sentiment-2.1?key='+process.env.API_KEY+'&url='+url+'&lang=en').then((res) => {
        console.log(res)
        response.send(res.data);
    })
    
})

