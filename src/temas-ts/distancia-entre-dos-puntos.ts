class Punto {
    x1: number;
    y1: number;
    x2: number;
    y2: number;

    constructor(x1: number, y1: number, x2: number, y2: number) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }

    // Para calcular la distancia entre dos puntos definidos por (x1, y1) y (x2, y2)
    distancia_del_punto(other: Punto): number {
        const dx = this.x2 - other.x2;
        const dy = this.y2 - other.y2;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

class Triangulo extends Punto {
    p1: Punto;
    p2: Punto;
    p3: Punto;

    constructor(p1: Punto, p2: Punto, p3: Punto) {
        super(p1.x1, p1.y1, p1.x2, p1.y2);  // Llamada al constructor de la clase base (no se usa directamente aquí)
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
    }

    // Para calcular la distancia de un lado del triángulo
    private getSideLength(p1: Punto, p2: Punto): number {
        return p1.distancia_del_punto(p2);
    }

    // Verifica si los puntos hacen un triángulo
    esTriangulo(): boolean {
        const A = this.getSideLength(this.p1, this.p2);
        const B = this.getSideLength(this.p2, this.p3);
        const C = this.getSideLength(this.p3, this.p1);
        
        return (A + B > C) && (A + C > B) && (B + C > A);
    }

    Imprimir_distancia(): void {
        const A = this.getSideLength(this.p1, this.p2);
        const B = this.getSideLength(this.p2, this.p3);
        const C = this.getSideLength(this.p3, this.p1);

        console.log(`Lado A (del p1(${this.p1.x2}, ${this.p1.y2}) al p2(${this.p2.x2}, ${this.p2.y2})): ${A}`);
        console.log(`Lado B (del p2(${this.p2.x2}, ${this.p2.y2}) al p3(${this.p3.x2}, ${this.p3.y2})): ${B}`);
        console.log(`Lado C (del p3(${this.p3.x2}, ${this.p3.y2}) al p1(${this.p1.x2}, ${this.p1.y2})): ${C}`);

        if (this.esTriangulo()) {
            console.log("Los puntos forman un triángulo.");
        } else {
            console.log("Los puntos NO forman un triángulo.");
        }
    }

    suma_de_lados(): number {
        const A = this.getSideLength(this.p1, this.p2);
        const B = this.getSideLength(this.p2, this.p3);
        const C = this.getSideLength(this.p3, this.p1);
        
        return A + B + C;
    }
}

const punto1 = new Punto(0, 0, 3, 4);
const punto2 = new Punto(3, 4, 6, 0);
const punto3 = new Punto(6, 0, 0, 0);

const triangulo = new Triangulo(punto1, punto2, punto3);
triangulo.Imprimir_distancia();
console.log(`Suma de los lados: ${triangulo.suma_de_lados()}`);
