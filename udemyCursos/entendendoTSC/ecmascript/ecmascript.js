"use strict";
//Let & Const
const seraQuePode = '?';
console.log(seraQuePode);
//console.log(estouAqui)
var estouAqui = '?';
let estaFrio = true;
if (estaFrio) {
    let acao = 'Colocar Casaco';
    console.log(acao);
}
//const tem escopo de bloco (define uma const global ou dentro de uma função)
const cpf = '333.478.028-70';
//cpf = '015.231.276-51'
console.log(cpf);
var segredo = 'externo';
function revelar() {
    var segredo = 'interno';
    console.log(segredo);
}
revelar();
console.log(segredo);
// Arrow Function
function somar(n1, n2) {
    return n1 - n2;
}
;
console.log(somar(3, 7));
const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(10, 7));
//Função sem parâmetro
const saudacao = () => console.log("Olá!");
saudacao();
//Função com um só parâmetro
const falarCom = (pessoa) => console.log('Olá,', pessoa);
falarCom("Tiago");
//THIS
/* function normalComThis (){
    console.log (this)
} */
/* const thisEspecial = normalComThis
    .bind ({ nome: 'Ana', idade: 32, cidade: "SP"})
thisEspecial () */
// o this de uma função arrow está no mesmo contexto que a função foi escrita
const arrowComThis = () => console.log(this);
arrowComThis();
//Destructuring Array
const graduacao = ['administracao', 5];
const [curso, duracao] = graduacao;
console.log(curso);
console.log(duracao);
//Destructuring Objeto
const item = {
    cidade: "Maceió",
    bairro: "Piracema",
    caracteristica: {
        p: "praias"
    }
};
const cidadeItem = item.cidade;
const bairroItem = item.bairro;
console.log(cidadeItem);
console.log(bairroItem);
const { cidade: c, bairro: b, caracteristica: { p } } = item;
console.log(c);
console.log(b);
console.log(p);
//Template String: delimitar string com '' ou " " ou usando símbolo da crase ``
const usuarioId = "Super COD3R";
const notificacao = "9";
const boasVindas = `
Boas Vindas ${usuarioId},
Notificações: ${parseInt(notificacao) > 9 ? 'Mais de 9.' : notificacao}
`;
console.log(boasVindas);
console.log(`${(1 + 1) * 30}`);
console.log(`cidade`);
//Promises: forma de trabalhar com assincronismo 
/* function esperar3s (){
    setTimeout (() => {
        console.log('3 segundo depois...')
    }, 3000)
}
esperar3s()
*/
/* function esperar4sPromise () {
   return new Promise((resolve: any) =>{
       setTimeout (() => {
           resolve('4 segundo depois...')
       }, 4000)
   })
}

esperar4sPromise()
   .then(dado => console.log(dado)) */
/* fetch('https://swapi.dev/api/people/1')
    .then (res => res.json())
    .then (personagem => personagem.filme)
    .then (films => fetch(films[0]))
    .then (resFilm => resFilm.json())
    .then (filme => console.log(filme.title))
    .catch(error => console.log("Cath!!!" + error)) */ 
//# sourceMappingURL=ecmascript.js.map