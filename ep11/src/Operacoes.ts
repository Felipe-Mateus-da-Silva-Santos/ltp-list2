export default class Operacoes {
    calcular(a: number, b: number, operacao: string) {
        if (operacao == "soma") {
            console.log(`${a} + ${b} = ${a + b}`);
        } else if (operacao == "subrai") {
            console.log(`${a} - ${b} = ${a - b}`);
        } else if (operacao == "multiplica") {
            console.log(`${a} x ${b} = ${a * b}`);
        } else if (operacao == "dividir") {
            console.log(`${a} / ${b} = ${a / b}`);
        }
    }
}