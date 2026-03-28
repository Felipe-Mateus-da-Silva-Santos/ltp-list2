export default class Numeros {
    a: number;
    b: number;
    c: number;

    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    maior(): void {
        if (this.a > this.b && this.a > this.c) {
            console.log(`Maior: ${this.a}`);
        } else if (this.b > this.a && this.b > this.c) {
            console.log(`Maior: ${this.b}`);
        } else {
            console.log(`Maior: ${this.c}`);
        }
    }
}