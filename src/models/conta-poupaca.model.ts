import { Conta } from './conta.model';
import { Cliente } from './cliente.model';

export class ContaPoupanca extends Conta {
  constructor(
    saldo: number,
    cliente: Cliente,
    public taxaJuros: number
  ) {
    super(saldo, cliente);
  }

  calcularTaxa(): number {
    return this.saldo * this.taxaJuros;
  }

  transferir(destino: Conta, valor: number): void {
    if (this.saldo >= valor) {
      this.saldo -= valor;
      destino.depositar(valor);
    } else {
      throw new Error('Saldo insuficiente');
    }
  }
}
