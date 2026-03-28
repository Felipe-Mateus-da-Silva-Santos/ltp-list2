export default class Intervalo {
    inicio: number;
    fim: number;

    constructor(inicio: number, fim: number) {
        this.inicio = inicio;
        this.fim = fim;
    }

    contem(numero: number): boolean {
        if (numero >= this.inicio && numero <= this.fim) {
            return true;
        } else {
            return false;
        }
    }
}