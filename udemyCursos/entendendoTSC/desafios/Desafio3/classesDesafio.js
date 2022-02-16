"use strict";
// Exercício 1 - Classe
/* function Moto(nome) {
    this.nome = nome
    this.velocidade = 0
 
    this.buzinar = function() {
        console.log('Toooooooooot!')
    }
 
    this.acelerar= function(delta) {
        this.velocidade = this.velocidade + delta
    }
}
 
var moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade) */
class moto {
    constructor(nome) {
        this.nome = nome;
        this.velocidade = 0;
    }
    buzinar() {
        return `Toooooooooot!`;
    }
    acelerar(delta) {
        return (this.velocidade + delta);
    }
}
const moto1 = new moto("Ducati");
moto1.buzinar();
console.log(moto1.velocidade);
moto1.acelerar(30);
console.log(moto1.velocidade);
// Exercício 2 - Herança
class objeto2D {
    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;
    }
}
class retangulo extends objeto2D {
    area() {
        return this.base * this.altura;
    }
}
const retangulo1 = new retangulo(6, 9);
console.log(retangulo1.area());
/* var objeto2D = {
    base: 0,
    altura: 0
}
 
var retangulo = Object.create(objeto2D)
retangulo.base = 5
retangulo.altura = 7
retangulo.area = function() {
    return this.base * this.altura
} */
// Exercício 3 - Getters & Setters
/* var estagiario = {
    _primeiroNome: ''
}
 
Object.defineProperty(estagiario, 'primeiroNome', {
    get: function () {
        return this._primeiroNome
    },
    set: function (valor) {
        if (valor.length >= 3) {
            this._primeiroNome = valor
        } else {
            this._primeiroNome = ''
        }
    },
    enumerable: true,
    configurable: true
})
 
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Le'
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Leonardo'
console.log(estagiario.primeiroNome) */
class estagiario {
    constructor() {
        this._primeiroNome = " ";
    }
    get primeiroNome() {
        return this._primeiroNome;
    }
    set primeiroNome(valor) {
        if (valor.length >= 3) {
            this._primeiroNome = valor;
        }
        else {
            this._primeiroNome = " ";
        }
    }
}
const estagiario1 = new estagiario;
console.log(estagiario1.primeiroNome);
estagiario1.primeiroNome = 'Ti';
console.log(estagiario1.primeiroNome);
estagiario1.primeiroNome = 'Flávia';
console.log(estagiario1.primeiroNome);
//# sourceMappingURL=classesDesafio.js.map