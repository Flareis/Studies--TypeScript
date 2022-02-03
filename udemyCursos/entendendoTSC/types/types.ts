//String
let nome = "Flávia"
console.log (nome)
//nome = '32'

//numbers
let idade = 67
//idade = 'Salem'
idade = 26.5
console.log(idade)

//Boolean
let possuiHobbies = true
//possuiHobbies = 1
console.log(possuiHobbies)

// Tipos explícitos
let numero: number
numero = 35
console.log(numero)

//Tipo Array
let hobbies: any[] = ['cozinhar', 'dançar', 'correr' ]
console.log (hobbies[1])
console.log (typeof hobbies)

hobbies = [100, 200, 300, 400] // hobbies = 100

//Tipo Tupla - é um array de quantidades prédefinidas
let endereco: [string, number, string] = ['Avenida', 99, 'bloco']
endereco = ['R. Luiz Scott', 209, '174A']
console.log (endereco)


//enums - valores prédifinidos com dias da semana, meses, gêneros de filme, etc.
enum cor {
    vermelho,
    cinza = 100, 
    amarelo,
    verde, 
    preto =100
}

let minhaCor: cor = cor.verde
console.log (minhaCor)
console.log (cor.vermelho, cor.verde)

function retornaMeuNome (): string {
    //return idade
    return nome
}
console.log(retornaMeuNome())

function digaOi (): void {
    console.log ('Oi!')
}
digaOi ()

function multiplicacao (numA: any, numB:any): number {
    return numA * numB
}
console.log (multiplicacao(23,9))

//tipo função
let calculo: (x: number, y: number) => number
calculo = multiplicacao
console.log (calculo(3,9))

//Objeto
let usuario: { nome: string, idade: number} = {
    nome: "Salem",
    idade: 0.4
}

console.log(usuario)

usuario ={
    idade: 35,
    nome: "Flávia"
}

console.log(usuario)
