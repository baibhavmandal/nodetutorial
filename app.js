const http = require('http');


const server = http.createServer((req,res) => {
    if (req.url === '/')
    res.end('hello love');
    else if (req.url === '/about')
    res.end('our about page');
    else
    res.end('error');
})

server.listen(8080);