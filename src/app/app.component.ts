import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaDeClientesComponent } from './componentes/lista-de-clientes/lista-de-clientes.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaDeClientesComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'services';
}
