export class Punto {
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

    // aqui calculo la distancia de (x1, y1) y (x2, y2)
    distancia_del_punto(other: Punto): number {
        const dx = this.x2 - other.x2;
        const dy = this.y2 - other.y2;
        return Math.sqrt(dx * dx + dy * dy);
    }
}


const punto1 = new Punto(0, 0, 3, 4);
const punto2 = new Punto(3, 4, 6, 0);

console.log(`Distancia entre puntos: ${punto1.distancia_del_punto(punto2)}`);
