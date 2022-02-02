"use strict";
//String
let nome = "Flávia";
console.log(nome);
//nome = '32'
//numbers
let idade = 67;
//idade = 'Salem'
idade = 26.5;
console.log(idade);
//Boolean
let possuiHobbies = true;
//possuiHobbies = 1
console.log(possuiHobbies);
// Tipos explícitos
let numero;
numero = 35;
console.log(numero);
//Tipo Array
let hobbies = ['cozinhar', 'dançar', 'correr'];
console.log(hobbies[1]);
console.log(typeof hobbies);
hobbies = [100, 200, 300, 400]; // hobbies = 100
//Tipo Tupla - é um array de quantidades prédefinidas
let endereco = ['Avenida', 99, 'bloco'];
endereco = ['R. Luiz Scott', 209, '174A'];
console.log(endereco);
//enums - valores prédifinidos com dias da semana, meses, gêneros de filme, etc.
var cor;
(function (cor) {
    cor[cor["vermelho"] = 0] = "vermelho";
    cor[cor["cinza"] = 100] = "cinza";
    cor[cor["amarelo"] = 101] = "amarelo";
    cor[cor["verde"] = 102] = "verde";
    cor[cor["preto"] = 100] = "preto";
})(cor || (cor = {}));
let minhaCor = cor.verde;
console.log(minhaCor);
console.log(cor.vermelho, cor.verde);
function retornaMeuNome() {
    //return idade
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log('Oi!');
}
digaOi();
function multiplicacao(numA, numB) {
    return numA * numB;
}
console.log(multiplicacao(23, 9));
//tipo função
let calculo;
calculo = multiplicacao;
console.log(calculo(3, 9));
//Objeto
let usuario = {
    nome: "Salem",
    idade: 0.4
};
console.log(usuario);
usuario = {
    idade: 35,
    nome: "Flávia"
};
console.log(usuario);
