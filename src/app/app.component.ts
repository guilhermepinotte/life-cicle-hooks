import { Component, OnInit } from '@angular/core';
import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  title = 'app-lista-de-compras';
  listaDeCompra!: Array<Item>;
  itemParaSerEditado! : Item;

  constructor(private servico: ListaDeCompraService) {}

  ngOnInit(): void {
    this.listaDeCompra = this.servico.getListaDeCompra();
    console.log(this.listaDeCompra);
  }

  editarItem(item: Item) {
    this.itemParaSerEditado = item;
  }

  salvarItem(item: Item) {
    this.itemParaSerEditado = item;
  }

}
