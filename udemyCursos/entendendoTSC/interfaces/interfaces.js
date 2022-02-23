"use strict";
function saudarComOla(pessoa) {
    console.log('Olá, ' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = "Flávia";
}
const pessoa = {
    nome: "Mel",
    idade: 4,
    saudar(sobrenome) {
        console.log("Olá, meu nome é " + this.nome + ' ' + sobrenome);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
//saudarComOla ({nome: 'Flávia', idade: 35, altura: 1.54})
pessoa.saudar('dos Reis');
//Com classes:
class client {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date;
    }
    saudar(sobrenome) {
        console.log("Olá, meu nome é " + this.nome + ' ' + sobrenome);
    }
}
const myClient = new client();
myClient.nome = "Tiago";
saudarComOla(myClient);
myClient.saudar('Eduardo');
console.log(myClient.ultimaCompra);
//# sourceMappingURL=interfaces.js.map