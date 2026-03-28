export default class Contador {
    valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    incrementar(): number {
        return this.valor = this.valor + 1;
    }

    mostar(): void {
        console.log(this.valor);
    }
}