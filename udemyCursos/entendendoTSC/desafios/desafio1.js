"use strict";
//Objeto Funcionário
let funcionario = {
    nome: 'Flávia',
    matricula: 43092,
    supervisor: 'Tiago',
    baterPonto: (horario) => {
        if (horario <= 8) {
            return 'Ponto Normal.'; //console.log ('Ponto Normal.');
        }
        else {
            return 'Fora do horário.'; //console.log ('Fora do horário.');
        }
    }
};
console.log(funcionario.nome);
console.log(funcionario.baterPonto(7.5));
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
let nota;
nota = 10;
nota = "dez";
console.log(`Minha nota é ${nota}!`);
//Tipo Never - nunca retorna, loop infinito, ou termina com erro
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: 'Sabão',
    preco: -10,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter nome.');
        }
        if (this.preco <= 0) {
            falha('Preço inválido!');
        }
    }
};
produto.validarProduto();
// Null
