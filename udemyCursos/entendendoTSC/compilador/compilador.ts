let canal: string = "Gaveta"
let inscritos:number = 673207

//canal = inscritos
console.log(`Canal = ${canal}`)

/* let nome : "Flávia"
console.log(`Nome = ${nome}`) */

function soma (a: any ,b: any) {
    return a + b
}

let qualquerCoisa
qualquerCoisa =23
qualquerCoisa = "abc"

function saudar (isManha : boolean, /*horas: number*/): string {
    //let a + b = 1
    let saudacao: string
    if (isManha){
        saudacao = ('Bom dia!')
    } else{
        saudacao = ('Tenha uma boa semana!')
    }
    return saudacao
}
console.log (saudar(true))