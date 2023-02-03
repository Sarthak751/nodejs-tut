const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("Welcome to our home page")
    }
    else if (req.url === '/about') {
        res.end("Here is the about page")
    }
    else res.end(`
    <h1>Oops! Page Not Found</h1>`
    )
})

server.listen(5000)