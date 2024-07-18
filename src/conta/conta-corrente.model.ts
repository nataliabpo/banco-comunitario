import { Conta } from './conta.model';
import { Cliente } from '../cliente/cliente.model';

export class ContaCorrente extends Conta {
  constructor(
    saldo: number,
    cliente: Cliente,
    public chequeEspecial: number
  ) {
    super(saldo, cliente);
  }

  transferir(destino: Conta, valor: number): void {
    if (this.saldo + this.chequeEspecial >= valor) {
      this.saldo -= valor;
      destino.depositar(valor);
    } else {
      throw new Error('Saldo insuficiente, mesmo com cheque especial');
    }
  }
}
