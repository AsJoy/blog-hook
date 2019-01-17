"use strict";
var log4js = require("log4js");
var path = require("path");
// const log4jsPath = path.resolve(__dirname, './../resources/log4js.json')
log4js.configure({
    appenders: {
        console: {
            type: 'console'
        },
        fileDate: {
            type: 'dateFile',
            pattern: 'yyyy-MM-dd.log',
            filename: path.resolve(__dirname, '../../log/project'),
        },
    },
    pm2: false,
    categories: {
        default: { appenders: ['console', 'fileDate'], level: 'trace' }
    }
});
module.exports = log4js.getLogger();
