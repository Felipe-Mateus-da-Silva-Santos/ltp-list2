export default class Retangulo {
    base: number;
    altura: number;

    constructor(base: number, altura: number) {
        this.base = base;
        this.altura = altura;
    }

    calcularArea(): void {
        console.log(`Área: ${this.base * this.altura}`);
    }
}
