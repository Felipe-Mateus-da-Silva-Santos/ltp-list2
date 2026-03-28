export default class Aluno {
    nome: string;
    curso: string;

    constructor(nome: string, curso: string) {
        this.nome = nome;
        this.curso = curso;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e estou cursando ${this.curso}.`);
    }
}