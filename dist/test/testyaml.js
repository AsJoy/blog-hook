"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yaml = require("js-yaml");
var fs = require("fs");
var path = require("path");
var res = fs.readFileSync(path.resolve(__dirname, './test.yaml'), 'utf-8');
var doc = yaml.loadAll(res);
console.log(doc);
