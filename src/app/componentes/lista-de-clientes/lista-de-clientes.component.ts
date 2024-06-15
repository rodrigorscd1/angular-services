import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-lista-de-clientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-de-clientes.component.html',
  styleUrl: './lista-de-clientes.component.css'
})
export class ListaDeClientesComponent {

  clientes: any = [];
  clientesFiltrados: any = [];
  idadeMinima: number | undefined;

  constructor(private clientesService: ClientesService){ }

  getData(){
    this.clientes = this.clientesService.getClientes();
    
  }

  verificaService(){
    console.log("Método Ativado");
    this.clientesService.verifica();
  }

  // ngOnInit() {
  //   this.clientes = this.clientesService.getClientes();
  //   this.clientesFiltrados = this.clientes.slice(); // Cria uma cópia da lista original
  // }

  // filtrarClientes() {
  //   this.clientesFiltrados = this.clientes.filter((cliente: { idade: number; }) => cliente.idade > 18);
  // }
  filtrarClientes() {
    if (this.idadeMinima !== undefined) {
      this.clientesFiltrados = this.clientes.filter((cliente: { idade: number; }) => cliente.idade >= this.idadeMinima);
    } else {
      this.clientesFiltrados = this.clientes.slice();
    }
}

}