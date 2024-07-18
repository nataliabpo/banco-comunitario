import { Conta } from './conta.model';
import { Gerente } from './gerente.model';

export class Cliente {
  constructor(
    public id: string,
    public nomeCompleto: string,
    public endereco: string,
    public telefone: string,
    public contas: Conta[] = [],
    public gerente: Gerente
  ) {}

  abrirConta(conta: Conta): void {
    this.contas.push(conta);
  }

  fecharConta(conta: Conta): void {
    this.contas = this.contas.filter(c => c !== conta);
  }

  mudarTipoConta(conta: Conta, novoTipo: string): void {
    // Implementação para mudar tipo de conta
  }
}
