"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logarClasse(construtor) {
    console.log(construtor);
}
function decoratorVazio(_) { }
function logarClasseSe(valor) {
    return valor ? logarClasse : decoratorVazio;
}
function decorator(obj) {
    return function (_) {
        console.log(obj.a + ' ' + obj.b);
    };
}
function logarObjeto(construtor) {
    console.log('Carregado...');
    return class extends construtor {
        constructor(...args) {
            console.log('Antes...');
            super(...args);
            console.log('Depois...');
        }
    };
}
//@logarClasse
//@logarClasseSe(true)
//@decorator({ a: 'Teste, b: 123'})
//@logarObjeto
let Eletrodomestico = class Eletrodomestico {
    constructor() {
        console.log("novo...");
    }
};
Eletrodomestico = __decorate([
    imprimivel
], Eletrodomestico);
function imprimivel(constructor) {
    constructor.prototype.imprimir = function () {
        console.log(this);
    };
}
//new Eletrodomestico().imprimir()
new Eletrodomestico().imprimir(); //não é uma boa opção pq perde qq validação
//É possível aplicar mais de um decorator sob uma classe
// Desafio Decorator perfilAdmin
const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: false
};
class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!');
    }
}
new MudancaAdministrativa().critico();
function perfilAdimin(construtor) {
    return class extends construtor {
        constructor(...args) {
            super(...args);
            if (!usuarioLogado || !usuarioLogado.admin) {
                throw new Error('Sem permissão!');
            }
        }
    };
}
//Decorator associado a um método
class contaCorrente {
    constructor(saldo) {
        this.saldo = saldo;
    }
    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        }
        else {
            return false;
        }
    }
    getSaldo() {
        return this.saldo;
    }
}
__decorate([
    naoNegativo
], contaCorrente.prototype, "saldo", void 0);
__decorate([
    congelar
], contaCorrente.prototype, "sacar", null);
__decorate([
    congelar
], contaCorrente.prototype, "getSaldo", null);
const cc = new contaCorrente(10234.87);
cc.sacar(5000);
cc.sacar(5000);
cc.sacar(5000);
cc.sacar(5000);
console.log(cc.getSaldo());
/* cc.getSaldo = function(){
    return this['saldo'] + 7000
} */
console.log(cc.getSaldo());
//Object.freeze()
function congelar(alvo, nomeMetodo, descritor) {
    console.log(alvo);
    console.log(nomeMetodo);
    descritor.writable = false;
}
//Decorator associado ao Atributo
function naoNegativo(alvo, nomePropriedade) {
    delete alvo[nomePropriedade];
    Object.defineProperty(alvo, nomePropriedade, {
        get: function () {
            return alvo["_" + nomePropriedade];
        },
        set: function (valor) {
            if (valor < 0) {
                throw new Error('Saldo Inválido');
            }
            else {
                alvo["_" + nomePropriedade] = valor;
            }
        }
    });
}
//# sourceMappingURL=decorators.js.map