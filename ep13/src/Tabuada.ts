export default class Tabuada {
    numero: number;

    constructor(numero: number) {
        this.numero = numero;
    }

    mostraTabuada(): void {
        for (let i = 1; i < 11; i++) {
            console.log(`${this.numero} x ${i} = ${this.numero * i}`);
        }
    }
}