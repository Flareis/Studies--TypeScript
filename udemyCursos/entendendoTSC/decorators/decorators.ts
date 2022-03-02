function logarClasse(construtor: Function) {
    console.log(construtor)
}

function decoratorVazio(_: Function) {}

function logarClasseSe (valor: boolean) {
    return valor ? logarClasse : decoratorVazio
}

function decorator(obj: {a: string, b?: number }){
    return function(_: Function): void {
        console.log(obj.a + ' ' + obj.b)
    }
}


type Construtor = { new(...args: any[]) }

function logarObjeto(construtor:any) {
    console.log('Carregado...')
    return class extends construtor {
        constructor(...args: any[]) {
            console.log('Antes...')
            super(...args)
            console.log('Depois...')
        }
    }
}

//@logarClasse
//@logarClasseSe(true)
//@decorator({ a: 'Teste, b: 123'})
//@logarObjeto
@imprimivel
class Eletrodomestico {
    constructor() {
        console.log("novo...")
    }
}

function imprimivel(constructor: Function) {
    constructor.prototype.imprimir = function() {
        console.log(this)
    }
}
//new Eletrodomestico().imprimir()
(<any> new Eletrodomestico()).imprimir() //não é uma boa opção pq perde qq validação

//É possível aplicar mais de um decorator sob uma classe

// Desafio Decorator perfilAdmin
const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: false
}
 
class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!')
    }
}
 
new MudancaAdministrativa().critico()

function perfilAdimin <T extends Construtor> (construtor: T) {
    return class extends construtor {
        constructor (...args:any []) {
            super(...args)
            if(!usuarioLogado || !usuarioLogado.admin) {
                throw new Error ('Sem permissão!')
            }
        }
    }
}

//Decorator associado a um método

class contaCorrente {
    @naoNegativo
    private saldo: number
 
    constructor(saldo:number){
     this.saldo = saldo
 }

    @congelar
    sacar(valor:number) {
        if (valor <= this.saldo){
            this.saldo -= valor
            return true
        } else {
            return false
        }
    }
    @congelar
    getSaldo() {
        return this.saldo
    }
}

const cc = new contaCorrente(10234.87)
cc.sacar(5000)
cc.sacar(5000)
cc.sacar(5000)
cc.sacar(5000)
console.log(cc.getSaldo())

/* cc.getSaldo = function(){
    return this['saldo'] + 7000
} */
console.log(cc.getSaldo())

//Object.freeze()
function congelar(alvo: any, nomeMetodo: string,
    descritor: PropertyDescriptor) {
        console.log(alvo)
        console.log(nomeMetodo)
        descritor.writable = false
}

//Decorator associado ao Atributo

function naoNegativo (alvo: any, nomePropriedade: string){
    delete alvo[nomePropriedade]
    Object.defineProperty(alvo, nomePropriedade, {
        get: function(): any {
            return alvo["_" + nomePropriedade]
        },
        set: function(valor: any): void {
            if(valor < 0) {
                throw new Error ('Saldo Inválido')
            } else {
                alvo["_" + nomePropriedade] = valor
            }
        }
    })
}