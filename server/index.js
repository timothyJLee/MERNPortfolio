"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
// Load HTTP module
var http = require("http");
var port = 3070;
app_1.default.set("port", port);
var server = http.createServer(app_1.default);
server.listen(port);
server.on("listening", function () {
    var addr = server.address();
    var bind = typeof addr === "string" ? "pipe ".concat(addr) : "port ".concat(addr.port);
    console.log("Listening on ".concat(bind));
});
module.exports = app_1.default;
