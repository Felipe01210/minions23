import { Component, Input } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';
import { ValoracionesComponent } from '../valoraciones/valoraciones.component';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [ValoracionesComponent],
  templateUrl: './productos.component.html'
})
export class ProductosComponent {

@Input() productData! : Producto


}
