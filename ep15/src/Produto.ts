export default class Produto {
    nome: string;
    preco: number;

    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
    }

    aplicarDesconto(percentual: number): void {
        const desconto = this.preco * (percentual / 100);
        this.preco -= desconto;
    }
}