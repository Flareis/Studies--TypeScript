"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import { areaCircunferencia } from "./circunferencia.js"
const circunferencia_js_1 = require("./circunferencia.js");
//import { areaRetangulo } from "./retangulo.js"
const retangulo_js_1 = __importDefault(require("./retangulo.js"));
console.log((0, retangulo_js_1.default)(7, 8));
console.log((0, circunferencia_js_1.areaCircunferencia)(15));
const { digaOi } = require('./novo.js');
console.log(digaOi('Flávia'));
console.log(digaOi('Tiago'));
console.log(digaOi('Salem'));
console.log(digaOi('todo mundo!'));
console.log(digaOi('Família!'));
//# sourceMappingURL=modulos.js.map