import { Injectable } from '@nestjs/common';
import { Cliente } from './cliente.model';
import { Gerente } from '../gerente/gerente.model';

@Injectable()
export class ClienteService {
  private clientes: Cliente[] = [];

  createCliente(nomeCompleto: string, endereco: string, telefone: string, gerente: Gerente): Cliente {
    const cliente = new Cliente(this.generateId(), nomeCompleto, endereco, telefone, [], gerente);
    this.clientes.push(cliente);
    return cliente;
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2, 9);
  }

  // Outras implementações como listar, atualizar, deletar clientes
}
