"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var rebuild = require("./component/hook/rebuild");
var log = require("./util/logconfig");
var path = require("path");
var config = require("config");
var serConfig = config.get('server');
process.env["NODE_CONFIG_DIR"] = path.resolve(__dirname, "../config");
var server = http.createServer(function (req, res) {
    var data = rebuild();
    res.writeHead(200, {
        'Content-Type': 'text/plain',
    });
    var bufferres = '';
    req.on('data', function (buffer) {
        bufferres += buffer.toString();
    });
    req.on('end', function () {
        try {
            log.info("url: " + req.url + " : ", "headers: " + JSON.stringify(req.headers) + " ", "" + (bufferres && JSON.stringify(JSON.parse(bufferres), null, 2)), data);
        }
        finally {
            res.end('test');
        }
    });
});
server.listen(serConfig.port);
