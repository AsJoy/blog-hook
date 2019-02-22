"use strict";
var log4js = require("log4js");
var config = require("config");
// const log4jsPath = path.resolve(__dirname, './../resources/log4js.json')
var log4jsConf = config.get('log4js');
log4js.configure(log4jsConf);
module.exports = log4js.getLogger();
