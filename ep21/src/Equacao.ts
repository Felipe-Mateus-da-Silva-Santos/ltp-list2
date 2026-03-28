export default class Equacao {
    a: number;
    b: number;
    c: number;

    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    calcularDelta(): void {
        console.log(`Delta: ${this.b * this.b - 4 * this.a * this.c}`);
    }
}