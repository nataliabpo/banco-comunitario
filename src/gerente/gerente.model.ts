import { Cliente } from '../cliente/cliente.model';
import { Conta } from '../conta/conta.model';

export class Gerente {
  constructor(
    public id: string,
    public nomeCompleto: string,
    public clientes: Cliente[] = []
  ) {}

  adicionarCliente(cliente: Cliente): void {
    this.clientes.push(cliente);
  }

  removerCliente(cliente: Cliente): void {
    this.clientes = this.clientes.filter(c => c !== cliente);
  }

  abrirConta(cliente: Cliente, tipoConta: string): void {
    // Implementação para abrir conta
  }

  fecharConta(cliente: Cliente, conta: Conta): void {
    // Implementação para fechar conta
  }

  mudarTipoConta(cliente: Cliente, conta: Conta, novoTipo: string): void {
    // Implementação para mudar tipo de conta
  }
}
