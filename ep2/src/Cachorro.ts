export default class Cachorro {
    nome: string;
    raca: string;

    constructor(nome: string, raca: string) {
        this.nome = nome;
        this.raca = raca;
    }

    Latir() {
        console.log("Au Au");
    }
}