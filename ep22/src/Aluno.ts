export default class Aluno {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    calcularMedia(n1: number, n2: number, n3: number): void {
        const media = (n1 + n2 + n3) / 3;
        console.log(`A média do aluno ${this.nome} é: ${media}`);
    }
}