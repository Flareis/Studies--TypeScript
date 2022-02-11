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
