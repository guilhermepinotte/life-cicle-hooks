import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListaDeCompraService {
  private listaDeCompra: Item[] = [
    {
      id: 1,
      nome: 'Queijo prato',
      data: 'Segunda-feira (31/10/2022) às 08:30',
      comprado: false,
    },
    {
      id: 2,
      nome: 'Leite integral',
      data: 'Segunda-feira (31/10/2022) às 08:30',
      comprado: false,
    },
    {
      id: 3,
      nome: 'Mamão papaia',
      data: 'Segunda-feira (31/10/2022) às 08:30',
      comprado: true,
    },
  ];

  constructor() {
    console.log('Instanciando dependências necessárias para o serviço.');
  }

  getListaDeCompra() {
    return this.listaDeCompra;
  }

  criarItem(nomeItem: string) {
    const id = this.listaDeCompra.length + 1;
    const novoItem: Item = {
      id,
      nome: nomeItem,
      data: new Date().toLocaleDateString('pt-BR'),
      comprado: false,
    };
    return novoItem;
  }

  adicionarItemNaLista(nome: string) {
    const novoItem = this.criarItem(nome);
    this.listaDeCompra.push(novoItem);
  }

  editarItemNaLista(itemQueVaiSerEditado: Item, nomeEditado: string) {
    const itemEditado: Item = {
      id: itemQueVaiSerEditado.id,
      nome: nomeEditado,
      data: itemQueVaiSerEditado.data,
      comprado: itemQueVaiSerEditado.comprado,
    };
    this.atualizarLista(itemEditado);
  }

  removerItem(id: number) {
    this.listaDeCompra = this.listaDeCompra.filter((item) => item.id !== id);
  }

  atualizarLista(itemEditado: Item) {
    this.listaDeCompra.splice(Number(itemEditado.id)-1 , 1,itemEditado)
  }
}
