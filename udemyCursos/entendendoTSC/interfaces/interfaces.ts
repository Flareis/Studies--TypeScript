interface humano {
    nome: string
    idade?: number
    [prop: string]: any
    saudar(sobrenome: string): void
}

function saudarComOla(pessoa:humano) {
    console.log('Olá, '+ pessoa.nome)
}

function mudarNome (pessoa: humano) {
    pessoa.nome = "Flávia"
}

const pessoa: humano = {
    nome: "Mel",
    idade: 4,
    saudar(sobrenome: string){
        console.log("Olá, meu nome é " + this.nome + ' ' + sobrenome)
    }
}

saudarComOla(pessoa)
mudarNome (pessoa)
saudarComOla (pessoa)
//saudarComOla ({nome: 'Flávia', idade: 35, altura: 1.54})
pessoa.saudar ('dos Reis')

//Com classes:

class client implements humano {
     nome: string = ''
     ultimaCompra: Date = new Date
     saudar(sobrenome: string): void {
        console.log("Olá, meu nome é " + this.nome + ' ' + sobrenome)
     }
     
 }

 const myClient = new client()
 myClient.nome = "Tiago"
 saudarComOla (myClient)
 myClient.saudar ('Eduardo')
 console.log(myClient.ultimaCompra)

 //Herança

 interface A {
     a():void
 }

 interface B {
     b():void
 }

 interface ABC extends A, B {
     c():void
 }

 class RealA implements A{
     a(): void {}
 }

 class RealAB implements A, B{
     a(): void {}
     b(): void {}
 }

 class RealABC implements ABC {
    a(): void {}
    b(): void {}
    c(): void {}
 }

 abstract class AbstractABD implements A,B {
    a(): void {}
    b(): void {}
    abstract d(): void 
 }

 //Exemplo prático: a interface só existe na checagem do compilado do Typescript

 interface Object {
     log(): void
 }

 Object.prototype.log = function () {
     console.log(this.toString())
 }

 const x = 2
 const y = 3
 const z = 4

 x.log()
 y.log()
 z.log()

 //Serve para todo o restante
 const cli = {
     nome: 'April',
     toString() {
         return this.nome
     }
 }

 cli.log()