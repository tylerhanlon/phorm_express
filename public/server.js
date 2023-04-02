const express = require('express');

const app = express();

const port = 1337;

const dir = __dirname + "/"

app.use(express.static('public'))
app.use(express.static('public/css'))
app.use(express.static('public/js'))
app.use(express.static('public/images'))

app.get('/', function(request, response) {
    response.sendFile(dir + 'index.html')
})

app.get('/index', function(request, response) {
    response.sendFile(dir + 'index.html')
})

app.get('/signup', function(request, response) {
    response.sendFile(dir + 'signup.html')
})

app.get('/groups', function(request, response) {
    response.sendFile(dir + 'groups.html')
})

app.get('/training', function(request, response) {
    response.sendFile(dir + 'training.html')
})

app.get('/taiSummary', function(request, response) {
    response.sendFile(dir + 'taiSummary.html')
})

app.get('/morganSummary', function(request, response) {
    response.sendFile(dir + 'morganSummary.html')
})

app.get('/peterSummary', function(request, response) {
    response.sendFile(dir + 'peterSummary.html')
})

app.get('/amandaSummary', function(request, response) {
    response.sendFile(dir + 'amandaSummary.html')
})

app.get('/*', function(request, response) {
    response.sendFile(dir + '404.html')
})

app.listen(port, function() {
    console.log("Listening on http://localhost:" + port + ' press ctrl+c to quit')
})