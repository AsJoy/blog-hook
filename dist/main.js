"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var rebuild = require("./hook/rebuild");
var log = require("./util/logconfig");
var server = http.createServer(function (req, res) {
    var data = rebuild();
    log.info("url: " + req.url + " : ", "headers: " + JSON.stringify(req.headers) + " ", "123");
    res.writeHead(200, {
        'Content-Type': 'text/plain',
    });
    // console.log(req)
    var bufferres = '';
    req.socket.on('data', function (buffer) {
        bufferres += buffer;
        // console.log(buffer.toString())
    });
    req.socket.on('end', function () {
        console.log(bufferres);
        console.log(123);
    });
    // let connectres = ''
    // req.connection.on('data', (buffer) => {
    //   connectres += buffer
    //   console.log(buffer.toString())
    // })
    // console.log(connectres)
    res.end('test');
});
server.listen(8008);
