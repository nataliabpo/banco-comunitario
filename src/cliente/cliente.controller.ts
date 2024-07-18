import { Controller, Post, Body } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { Gerente } from '../gerente/gerente.model';

@Controller('clientes')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post()
  createCliente(
    @Body('nomeCompleto') nomeCompleto: string,
    @Body('endereco') endereco: string,
    @Body('telefone') telefone: string,
    @Body('gerente') gerente: Gerente
  ) {
    return this.clienteService.createCliente(nomeCompleto, endereco, telefone, gerente);
  }

  // Outras rotas como listar, atualizar, deletar clientes
}
