import http = require("http");
import rebuild = require("./hook/rebuild");
import log = require("./util/logconfig");



const server = http.createServer(function (req, res) {
  const data = rebuild()
  log.info('123123')
  res.writeHead(200, {
    'Content-Type': 'text/plain',
  })
  res.end(data)
})

server.listen(8008)


