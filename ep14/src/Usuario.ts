export default class Usuario {
    nome: string;
    email: string;

    constructor(nome: string, email: string) {
        this.nome = nome;
        this.email = email;
    }

    validarEmail(): void {
        if (this.email.includes("@") && this.email.includes(".")) {
            console.log("Email valido");
        } else {
            console.log("Email invalido");
        }
    }
}