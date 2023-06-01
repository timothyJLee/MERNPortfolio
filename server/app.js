"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var App = /** @class */ (function () {
    function App() {
        this.express = (0, express_1.default)();
        this.middleware();
        this.routes();
    }
    // Configure Express middleware.
    App.prototype.middleware = function () {
        this.express.use(body_parser_1.default.json());
        this.express.use(body_parser_1.default.urlencoded({ extended: false }));
    };
    App.prototype.routes = function () {
        this.express.use("/", function (req, res, next) {
            res.send("Typescript App works!!!");
        });
    };
    return App;
}());
exports.default = new App().express;
