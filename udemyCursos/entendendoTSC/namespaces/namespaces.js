"use strict";
//espaço reservado em que o nome não vai conflitar com o escopo global
/* namespace Geometria { /*namespace aninhado
    export namespace Area {
        const PI = 3.14
        export function areaCincunferecia (raio:number): number {
            return PI*Math.pow(raio, 2)
        }
        export function areaRetangulo (base: number, altura: number): number{
            return base *altura
            
        }
    }
} */
///Namespace em multiplos arquivos: quebra em mais de um arquivo
///<reference path="geometriaCirc.ts"/>
///<reference path="geometriaRet.ts"/>
const PI = 2.99;
console.log(Geometria.Area.areaCincunferecia(230));
console.log(Geometria.Area.areaRetangulo(3, 20));
console.log(PI);
//Limitações do namespace
/*livra funções, constantes e variáveis do escopo global
e coloca dentro de um espaço de nomes e evita conflitos
Tudo que estiver dentro no Namespace estará protegido. Porém,
não é muito declarativo, pois em nenhum momento fica claro a
ideia de que precisará importar outro módulo*/
//# sourceMappingURL=namespaces.js.map