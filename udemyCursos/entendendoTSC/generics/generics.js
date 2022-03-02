"use strict";
function echo(objeto) {
    return objeto;
}
console.log(echo('Karl').length);
console.log(echo(27).length);
console.log(echo({ nome: 'Karl', idade: 27 }));
//Usando o Generics
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado('Karl').length);
console.log(echoMelhorado(27));
console.log(echoMelhorado({ nome: 'Karl', idade: 27 }));
//Generics com Array
const avaliacoes = [10, 9.3, 8.4, 7.1];
avaliacoes.push(8.4);
//avaliacoes.push('5.5')
console.log(avaliacoes);
function imprimir(args) {
    args.forEach(elemento => console.log(elemento));
}
imprimir([1, 2, 3]);
imprimir([1, 3, 7]);
imprimir(["Maria", "Larissa", "Leticía"]);
imprimir([
    { nome: "Maria", idade: 41 },
    { nome: "Larissa", idade: 16 },
    { nome: "Letícia", idade: 15 }
]);
imprimir([
    { nome: "Maria", idade: 41 },
    { nome: "Larissa", idade: 16 },
    { nome: "Letícia", idade: 15 }
]);
const chamarEcho = echoMelhorado;
console.log(chamarEcho('Alguma coisa'));
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
class operacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
class somaBinaria extends operacaoBinaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new somaBinaria(3, 4).executar());
console.log(new somaBinaria(371, 49).executar());
class diferncaEntreDatas extends operacaoBinaria {
    getTime(data) {
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }
    executar() {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        const diferenca = Math.abs(t1 - t2);
        const dia = 1000 * 60 * 60 * 24;
        return `${Math.ceil(diferenca / dia)} dia(s).`;
    }
}
const d1 = new DataEsperta(25, 2, 2022);
const d2 = new DataEsperta(27, 7, 1986);
console.log(new diferncaEntreDatas(d1, d2).executar());
//Desafio
class Fila {
    constructor(...args) {
        this.fila = args;
    }
    entrar(elementos) {
        this.fila.push(elementos);
    }
    proximo() {
        if (this.fila.length >= 0 && this.fila[0]) {
            const primeiro = this.fila[0];
            this.fila.splice(0, 1);
            return primeiro;
        }
        else {
            return null;
        }
    }
    imprimir() {
        console.log(this.fila);
    }
}
const fila = new Fila('Flávia', 'Mari', 'Gabi', 'Pat');
fila.imprimir();
fila.entrar('Ruth');
fila.imprimir;
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
fila.imprimir();
//Constraints
const novaFila = new Fila(1, 2, 3);
novaFila.imprimir();
/* //pode dizer que existe não apenas um tipo genérico,
 mas também que precisa respeita um tipo pai ou mesmo tipos primitivos
 como numbers, boolean ou string */
//*** DESAFIO ***
// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()
/* class Mapa<T extends number | string> {
    private mapa: Array <T>
    
    function colocar ( chave: number, valor: string): any{
        
    }
} */
/* const mapa = new Mapa<number, string>()
mapa.colocar({ chave: 1, valor: 'Pedro' })
mapa.colocar({ chave: 2, valor: 'Rebeca' })
mapa.colocar({ chave: 3, valor: 'Maria' })
mapa.colocar({ chave: 1, valor: 'Gustavo' })
 
console.log(mapa.obter(2))
mapa.imprimir()
mapa.limpar()
mapa.imprimir() */
//# sourceMappingURL=generics.js.map