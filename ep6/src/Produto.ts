export default class Produto {
    nome: string;
    preco: number;

    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
    }

    estaCaro(): boolean {
        if (this.preco > 100) {
            return true;
        } else {
            return false;
        }
    }
}
