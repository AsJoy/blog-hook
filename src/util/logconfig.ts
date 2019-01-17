import log4js = require('log4js');
import path = require("path");


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
})

export = log4js.getLogger()
