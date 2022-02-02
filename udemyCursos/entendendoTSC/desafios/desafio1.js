"use strict";
//Objeto Funcionário
let funcionario = {
    nome: 'Flávia',
    matricula: 2707,
    gestor: 'Tiago',
    supervisor: 'Salem'
};
console.log(funcionario);
//let baterPonto: (horario: number)
//function baterPonto (num: number): string
function baterPonto(horario) {
    if (horario <= 8) {
        return 'Ponto Normal.'; //console.log ('Ponto Normal.');
    }
    else {
        return 'Fora do horário.'; //console.log ('Fora do horário.');
    }
}
console.log(baterPonto(7.9));
/* //let baterPonto = function (horario: number) : string
{
    return
} */ 
