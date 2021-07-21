"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var connection = typeorm_1.createConnection().then(function () { return console.log('connected'); });
exports.default = connection;
