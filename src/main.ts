import http = require("http");
import rebuild = require("./hook/rebuild");


const server = http.createServer(function (req, res) {
  const data = rebuild()
  res.writeHead(200, {
    'Content-Type': 'text/plain',
  })
  res.end(data)
})

server.listen(8008)


