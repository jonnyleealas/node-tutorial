const http = require("http")
const server = http.createServer((req, res) => {
    console.log(req)
    if(req.url === '/'){
        res.end('jisoo')
    }
    if(req.url === '/about'){
        res.end('jennie')
    }
    if(req.url === "/lisa"){
        res.end("lalisa money bitch")
    }
    res.end(`
    <h1>ooops</h1>
    <p>we can't find page you are looking for</p>
    <a href="https://www.npmjs.com/"> back home</a>
    `)
})

server.listen(3000)