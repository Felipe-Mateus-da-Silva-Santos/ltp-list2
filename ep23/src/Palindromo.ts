export default class Palindromo {
    palavra: string;

    constructor(palavra: string) {
        this.palavra = palavra;
    }

    ehPalindromo(): boolean {
        const cleanPalavra = this.palavra.replace(/\s/g, '').toLowerCase();
        const reversedPalavra = cleanPalavra.split('').reverse().join('');
        return cleanPalavra === reversedPalavra;
    }
}