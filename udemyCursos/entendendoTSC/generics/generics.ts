function echo (objeto: any) {
    return objeto
}

console.log (echo('Karl').length)
console.log (echo(27).length)
console.log (echo({nome: 'Karl', idade: 27}))

//Usando o Generics

function echoMelhorado<T>(objeto: T): T{
    return objeto
}
console.log (echoMelhorado('Karl').length)
console.log (echoMelhorado<number>(27))
console.log (echoMelhorado({nome: 'Karl', idade: 27}))

//Generics com Array
const avaliacoes: Array<number> = [10, 9.3, 8.4, 7.1]
avaliacoes.push(8.4)
//avaliacoes.push('5.5')
console.log(avaliacoes) 

function imprimir<T> (args: T[]){
    args.forEach(elemento => console.log(elemento))
}

imprimir([1, 2, 3])
imprimir<number>([1, 3, 7])
imprimir <string> (["Maria", "Larissa", "Leticía"])
imprimir<{nome:string, idade:number}>([
    {nome:"Maria", idade:41},
    {nome:"Larissa", idade:16},
    {nome:"Letícia", idade: 15}
])

type Aluno = {nome:string, idade: number}
imprimir<Aluno>([
    {nome:"Maria", idade:41},
    {nome:"Larissa", idade:16},
    {nome:"Letícia", idade: 15}
])

//Tipo função com Generics

type Echo = <T> (data:T) => T
const chamarEcho: Echo  = echoMelhorado
console.log (chamarEcho<string> ('Alguma coisa'))

//Classe com Generics

/* class operacaoBinaria {
    constructor(public operando1: any,
        public operando2: any){}
    
    executar(){
        return this.operando1 + this.operando2
    }
}
console.log(new operacaoBinaria('Bom', 'dia').executar())
console.log(new operacaoBinaria(3, 7).executar())
console.log(new operacaoBinaria(3, "Epa!").executar())
console.log(new operacaoBinaria({}, {}).executar()) */

abstract class operacaoBinaria<T, R> {
    constructor(public operando1: T,
        public operando2: T){}
    
    abstract executar(): R
}

class somaBinaria extends operacaoBinaria<number, number> {
    executar(): number {
        return this.operando1 + this.operando2
    }
}

console.log(new somaBinaria(3,4).executar())
console.log(new somaBinaria(371,49).executar())

class diferncaEntreDatas 
    extends operacaoBinaria<DataEsperta, string> {
    getTime (data:DataEsperta): number {
        let{ dia, mes, ano } = data
        return new Date(`${mes}/${dia}/${ano}`).getTime()
    }
    executar(): string {
        const t1 = this.getTime(this.operando1)
        const t2 = this.getTime(this.operando2)
        const diferenca = Math.abs(t1 - t2)
        const dia = 1000 * 60 * 60 * 24
        return `${Math.ceil(diferenca / dia)} dia(s).`
    }
}

const d1 = new DataEsperta (25, 2, 2022)
const d2 = new DataEsperta (27, 7, 1986)
console.log(new diferncaEntreDatas (d1,d2).executar())

//Desafio

class Fila<T extends number | string>{ 
    private fila: Array <T>

    constructor(...args: T[]){
        this.fila = args
    }
    entrar(elementos: T){
        this.fila.push(elementos)
    }
    proximo(): T | null {
        if (this.fila.length >=0 && this.fila[0]) {
            const primeiro = this.fila[0]
            this.fila.splice(0,1)
            return primeiro
        } else {
        return null
        }
    }
    
    imprimir() {
        console.log(this.fila)
    }
 }

 const fila = new Fila<string>('Flávia', 'Mari', 'Gabi', 'Pat')

 fila.imprimir()
 fila.entrar('Ruth')
 fila.imprimir
 console.log(fila.proximo())
 console.log(fila.proximo())
 console.log(fila.proximo())

 fila.imprimir()
 
//Constraints

const novaFila = new Fila<number>(1, 2, 3)
novaFila.imprimir()

/* //pode dizer que existe não apenas um tipo genérico,
 mas também que precisa respeita um tipo pai ou mesmo tipos primitivos
 como numbers, boolean ou string */


 