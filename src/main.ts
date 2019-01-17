import http = require("http");
import rebuild = require("./hook/rebuild");
import log = require("./util/logconfig");
import { IncomingMessage, ServerResponse } from "http"

const server = http.createServer(function (req: IncomingMessage, res: ServerResponse) {
  const data = rebuild()
  res.writeHead(200, {
    'Content-Type': 'text/plain',
  })
  let bufferres = ''
  req.on('data', (buffer) => {
      bufferres += buffer.toString()
  })
  req.on('end', () => {
    log.info(`url: ${req.url} : `, `headers: ${JSON.stringify(req.headers)} `, `${bufferres}`, data)
    res.end('test')
  })
})

server.listen(8008)


