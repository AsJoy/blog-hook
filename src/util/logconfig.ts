import log4js = require('log4js');
import config = require("config");
import { Configuration } from 'log4js'

const log4jsConf = config.get<Configuration>('log4js')
log4js.configure(log4jsConf)

export = log4js.getLogger()
