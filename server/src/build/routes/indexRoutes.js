"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var IndexRoutes = /** @class */ (function () {
    function IndexRoutes() {
        this.router = express_1.Router();
    }
    IndexRoutes.prototype.config = function () {
        this.router.get('/', function (req, res) { return res.send('Hola'); });
    };
    return IndexRoutes;
}());
var indexroutes = new IndexRoutes();
exports.default = indexroutes.router;
