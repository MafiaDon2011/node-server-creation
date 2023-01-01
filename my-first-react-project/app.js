const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' }) //200 means everything is okay
    fs.readFile('index.html', function(error, data) {
        if (error) {
            res.writeHead(404) //404 means not found
            res.write('Error: File was not found')
        } else {
            res.write(data) //just prints all data from index.html
        }
        res.end()
    })
})

server.listen(port, function(error) {
    if (error) {
        console.log('Something went wrong', error)
    } else {
        console.log('Our server is listening on port ' + port)
    }
})