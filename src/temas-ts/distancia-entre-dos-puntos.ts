// Clase Punto para calcular la distancia entre dos puntos
class Punto {
    private x: number;
    private y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    // Método para calcular la distancia entre dos puntos
    public distancia(otroPunto: Punto): number {
        const dx = this.x - otroPunto.x;
        const dy = this.y - otroPunto.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    // Método para mostrar el punto como texto
    public toString(): string {
        return `(${this.x}, ${this.y})`;
    }
}

// Ejemplo de uso
const punto1 = new Punto(1, 2);
const punto2 = new Punto(4, 6);

const distancia = punto1.distancia(punto2);
console.log(`La distancia entre los puntos ${punto1.toString()} y ${punto2.toString()} es: ${distancia}`);

// Clase Triangulo que hereda de Punto
class Triangulo extends Punto {
    private punto2: Punto;
    private punto3: Punto;

    constructor(punto1: Punto, punto2: Punto, punto3: Punto) {
        super(punto1['x'], punto1['y']); // Heredamos el constructor de Punto
        this.punto2 = punto2;
        this.punto3 = punto3;
    }
