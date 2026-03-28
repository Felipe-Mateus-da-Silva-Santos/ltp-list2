export default class Texto {
    conteudo: string;

    constructor(conteudo: string) {
        this.conteudo = conteudo;
    }

    repetir(vezes: number): void {
        for (let i = 0; i < vezes; i++) {
            console.log(this.conteudo);
        }
    }
}