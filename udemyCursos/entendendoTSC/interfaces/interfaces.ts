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