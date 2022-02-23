namespace Geometria { /*namespace aninhado*/
    export namespace Area {
        const PI = 3.14
        
        export function areaCincunferecia (raio:number): number {
            return PI*Math.pow(raio, 2)
        }
    }
}