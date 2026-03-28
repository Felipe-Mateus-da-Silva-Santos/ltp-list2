

export default class ContaBancaria {
    titular: string;
    saldo: number;

    constructor(titular: string) {
        this.titular = titular;
        this.saldo = 0;
    }

    depositar(valor: number): void {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado.`);
        console.log(`Saldo R$ ${this.saldo}`);
    }

    sacar(valor: number): void {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado.`);
        } else {
            console.log("Saldo insuficiente.");
        }
        console.log(`Saldo R$ ${this.saldo}`);
    }
}

