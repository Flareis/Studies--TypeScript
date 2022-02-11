"use strict";
/* class Data {
    //Público por padrão
    dia: number
    public mes: number
    ano: number

    constructor(dia: number =1, mes: number = 1,
        ano: number = 1970) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

const aniversario = new Data (3, 11, 1991)
aniversario.dia = 4
console.log(aniversario.dia)
console.log(aniversario)

const casamento = new Data // pode omitir os "()"
casamento.ano = 2017
console.log(casamento) */
///*///*
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEsperto = new DataEsperta(3, 11, 1991);
aniversarioEsperto.dia = 4;
console.log(aniversarioEsperto.dia);
console.log(aniversarioEsperto);
const casamentoEsperto = new DataEsperta; // pode omitir os "()"
casamentoEsperto.ano = 2017;
console.log(casamentoEsperto);
//Desafio
class produtos {
    constructor(nome, preco = 1, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    descont() {
        return this.preco * (1 - this.desconto);
    }
    resumo() {
        return `${this.nome} custa R$${this.descont()} (${this.desconto * 100}% off)`;
    }
}
/* const produto1 = new produtos ("café", 4.20)
produto1.desconto = 0.06
console.log (produto1.resumo())

const produto2 = new produtos ("chocolate", 7.89, 0.05)
console.log (produto2.resumo()) */
const produto1 = new produtos("café", 4.20);
produto1.desconto = 0.06;
console.log(produto1.resumo());
const produto2 = new produtos("chocolate", 7.89, 0.05);
console.log(produto2.resumo());
//# sourceMappingURL=classes.js.map