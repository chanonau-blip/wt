import { createServer } from "http"

const server = createServer((req, res) => {
    switch (req.url) {
        case "/":
            res.writeHead(200, { "content-type": "text/html" })
            res.end("<h1>Hello, Welcome to CT Web Applications</h1><img src='https://picsum.photos/300/200?random=1' alt='pic' />")
            break;

        default:
            res.writeHead(404, { "content-type": "text/html" })
            res.end("<h1>Not Found Page</h1>")
            break;
    }
})

const host = "127.0.0.1"
const port = 3000

server.listen(port, host, () => {
    console.log(`Server running on http://${host}:${port}`)
})