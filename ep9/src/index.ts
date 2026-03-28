import defaultContaBancaria from "./ContaBancaria.ts";

const conta = new defaultContaBancaria("João");
conta.depositar(500);
conta.sacar(200);