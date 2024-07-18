import { Cliente } from '../models/cliente.model';

export abstract class Conta {
  constructor(
    public saldo: number,
    public cliente: Cliente
  ) {}

  depositar(valor: number): void {
    this.saldo += valor;
  }

  sacar(valor: number): void {
    if (this.saldo >= valor) {
      this.saldo -= valor;
    } else {
      throw new Error('Saldo insuficiente');
    }
  }

  verificarSaldo(): number {
    return this.saldo;
  }

  abstract transferir(destino: Conta, valor: number): void;
}
