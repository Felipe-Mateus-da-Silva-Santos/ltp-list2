export default class Temperatura {
    celsius: number;

    constructor(celsius: number) {
        this.celsius = celsius;
    }

    converterParaFahrenheit(): void {
        console.log(`${(this.celsius * 9 / 5) + 32} F`);
    }

    converterParaKelvin(): void {
        console.log(`${this.celsius + 273.15} K`);
    }
}