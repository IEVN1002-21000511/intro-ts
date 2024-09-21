import { Punto } from './distancia_de_puntos.ts';

class Triangulo extends Punto {
    p2: Punto;
    p3: Punto;

    constructor(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number) {
        
        super(x1, y1, x2, y2);
        
        this.p2 = new Punto(x2, y2, x3, y3);
        this.p3 = new Punto(x3, y3, x1, y1);
    }

    // aqui calculo la distancia de un lado del triángulo
    private getSideLength(p1: Punto, p2: Punto): number {
        return p1.distancia_del_punto(p2);
    }

    // aqui verifico si los puntos hacen un triángulo
    esTriangulo(): boolean {
        const A = this.getSideLength(this, this.p2);
        const B = this.getSideLength(this.p2, this.p3);
        const C = this.getSideLength(this.p3, this);

        return (A + B > C) && (A + C > B) && (B + C > A);
    }

    Imprimir_distancia(): void {
        const A = this.getSideLength(this, this.p2);
        const B = this.getSideLength(this.p2, this.p3);
        const C = this.getSideLength(this.p3, this);

        console.log(`Lado A (del p1(${this.x2}, ${this.y2}) al p2(${this.p2.x2}, ${this.p2.y2})): ${A}`);
        console.log(`Lado B (del p2(${this.p2.x2}, ${this.p2.y2}) al p3(${this.p3.x2}, ${this.p3.y2})): ${B}`);
        console.log(`Lado C (del p3(${this.p3.x2}, ${this.p3.y2}) al p1(${this.x2}, ${this.y2})): ${C}`);

        if (this.esTriangulo()) {
            console.log("Los puntos forman un triángulo.");
        } else {
            console.log("Los puntos NO forman un triángulo.");
        }
    }

    suma_de_lados(): number {
        const A = this.getSideLength(this, this.p2);
        const B = this.getSideLength(this.p2, this.p3);
        const C = this.getSideLength(this.p3, this);

        return A + B + C;
    }
}
const triangulo = new Triangulo(1, 2, 4, 6, 7, 2);
triangulo.Imprimir_distancia();
console.log(`Suma de los lados: ${triangulo.suma_de_lados()}`);
