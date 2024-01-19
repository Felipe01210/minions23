import { Component, inject } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { MinionsComponent } from './minions/minions.component';
import { Minion } from '../app/interfaces/minions.interface';
import { ButtonImagesComponent } from './button-images/button-images.component';
import { ValoracionesComponent } from './valoraciones/valoraciones.component';
import { ProductosComponent } from './productos/productos.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, MinionsComponent, ButtonImagesComponent, ValoracionesComponent,
  ProductosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{

  title = 'pruebasAngular';

//filtrados
// filtrados: Minion[] = this.minions;

searchTerm:string = '';

//   filterQuery(query: string){
//     if(query.length>0){
//       this.filtrados = this.minions.filter(minion => minion.name.toLowerCase().includes(query.toLowerCase()));
//     }else{
//       this.filtrados = this.minions;
//     }
//   }

  searchMinion(query: string){
    // this.filterQuery(query)
    this.searchTerm = query;
  }
}
