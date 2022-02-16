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

class DataEsperta{
    constructor(public dia: number =1, public  mes: number = 1, 
       public ano: number = 1970) {
    }
}

const aniversarioEsperto = new DataEsperta
 (3, 11, 1991)
aniversarioEsperto.dia = 4
console.log(aniversarioEsperto.dia)
console.log(aniversarioEsperto)

const casamentoEsperto = new DataEsperta // pode omitir os "()"
casamentoEsperto.ano = 2017
console.log(casamentoEsperto)

//Desafio

class produtos {
    constructor ( public nome: string, public preco: number =1,
        public desconto: number = 0) {
        }

        public descont(): number {
          return this.preco * (1 - this.desconto)
        }

        public resumo(): string {
            return `${this.nome} custa R$${this.descont()} (${this.desconto * 100}% off)`
        }
}

/* const produto1 = new produtos ("café", 4.20)
produto1.desconto = 0.06
console.log (produto1.resumo())

const produto2 = new produtos ("chocolate", 7.89, 0.05)
console.log (produto2.resumo()) */

const produto1 = new produtos ("café", 4.20) 
produto1.desconto = 0.06
console.log (produto1.resumo())

const produto2 = new produtos ("chocolate", 7.89, 0.05)
console.log (produto2.resumo())

//Getters and Setters

class pessoa {
    private _idade: number = 0

    get idade(): number {
        return this._idade
    }

    set idade (valor: number) {
        if (valor >= 0 && valor <=120){
            this._idade = valor
        }
    }
}

const pessoa1 = new pessoa
pessoa1.idade = 10
console.log(pessoa1)

pessoa1.idade = -3
console.log(pessoa1.idade)

// Atributos e métodos estáticos: quando um atributo é estático o valor estará associado à classe 
//e não acada uma das instâncias

/* class matematica {
    PI: number = 3.1416

    areaCir(raio: number): number {
        return this.PI * raio * raio
    }
}

const m1 = new matematica()
m1.PI = 3,2437
console.log(m1.areaCir(4))

const m2 = new matematica()
console.log(m2.areaCir(4)) */

class matematica {
    static PI: number = 3.1416 //atributo

    static areaCir(raio: number): number { //método
        return this.PI * raio * raio
    }
}

console.log(matematica.areaCir(8))

//Classe Abstrata

abstract class Calculo {
    protected resultado: number = 0

    abstract executar(...numero: number []): void

    getResultado(): number {
        return this.resultado
    }
}

class Soma extends Calculo {
    executar(...numero: number[]): void {
        this.resultado = numero.reduce((t, a) => t + a)
    }
}

class Multiplicacao extends Calculo {
    executar(...numero: number[]): void {
        this.resultado = numero.reduce((t, a) => t * a)
    }
}

let c1: Calculo = new Soma()
c1.executar(2, 3, 4, 5)
console.log(c1.getResultado())

c1 = new Multiplicacao()
c1.executar(2, 3, 4, 5)
console.log(c1.getResultado())