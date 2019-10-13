"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class BaseController {
    constructor() {
        this.entity = '';
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('SELECT * FROM ' + this.entity);
            res.json(result);
        });
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const entityresult = yield database_1.default.query('SELECT * FROM ' + this.entity + ' WHERE id = ?', [id]);
            console.log(entityresult.length);
            if (entityresult.length > 0) {
                return res.json(entityresult[0]);
            }
            res.status(404).json({ text: "The " + this.entity + " doesn't exits" });
        });
    }
    post(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO ' + this.entity + ' set ?', [req.body]);
            res.json({ message: this.entity + ' Saved' });
        });
    }
    put(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const old = req.body;
            yield database_1.default.query('UPDATE ' + this.entity + ' set ? WHERE id = ?', [req.body, id]);
            res.json({ message: "The " + this.entity + " was Updated" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM ' + this.entity + ' WHERE id = ?', [id]);
            res.json({ message: "The " + this.entity + " was deleted" });
        });
    }
}
exports.BaseController = BaseController;
