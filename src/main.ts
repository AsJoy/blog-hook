import '@/initialize'

import { IncomingMessage, ServerResponse } from 'http'

import http = require('http')
import rebuild = require('./component/hook/rebuild')
import log = require('@/util/logconfig')
import path = require('path')
import config = require('config')

const serConfig = config.get<any>('server')

process.env.NODE_CONFIG_DIR = path.resolve(__dirname, '../config')

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    const data = rebuild()
    res.writeHead(200, {
        'Content-Type': 'text/plain',
    })
    let bufferres = ''
    req.on('data', buffer => {
        bufferres += buffer.toString()
    })
    req.on('end', () => {
        try {
            log.info(`url: ${req.url} : `, `headers: ${JSON.stringify(req.headers)} `, `${bufferres && JSON.stringify(JSON.parse(bufferres), null, 2)}`, data)
        } finally {
            res.end('test')
        }
    })
})

server.listen(serConfig.port)
