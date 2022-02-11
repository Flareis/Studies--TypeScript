//Objeto Funcionário
let funcionario: Funcionario = {
    nome: 'Flávia',
    matricula: 86014,
    supervisor: 'Tiago',
    baterPonto: (horario: number): string => {
        if (horario <= 8)
    {
        return 'Ponto Normal.' //console.log ('Ponto Normal.');
    }
    else
    {
        return 'Fora do horário.' //console.log ('Fora do horário.');
    }
}
}
console.log (funcionario.nome)
console.log (funcionario.baterPonto(7.5))

//Alias
type Funcionario = {
    nome: string, 
    matricula: number, 
    supervisor: string,
    baterPonto: (horario: number) => string
}

/*function baterPonto (horario: number): string {
    if (horario <= 8)
    {
        return 'Ponto Normal.' //console.log ('Ponto Normal.');
    }
    else
    {
        return 'Fora do horário.' //console.log ('Fora do horário.');
    }
}*/

//Union Types
let nota : number | string
nota = 10
nota = "mil"
console.log(`Minha nota é ${nota}!`)

//Tipo Never - nunca retorna, loop infinito, ou termina com erro
function falha(msg: string) : never {
    throw new Error(msg)
}
const produto = {
    nome: 'Sabão',
    preco: 10,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter nome.')
        }
        if(this.preco <= 0){
            falha('Preço inválido!')
        }
    }
}
produto.validarProduto()

// Null
