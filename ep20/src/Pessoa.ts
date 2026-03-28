export default class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    idadeEmDias(): void {
        console.log(this.idade * 365);
    }
}