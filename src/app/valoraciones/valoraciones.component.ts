import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-valoraciones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './valoraciones.component.html'
})
export class ValoracionesComponent implements OnInit{

  @Input() valoracion: number = 0;

  estrellas: string[] = []


  ngOnInit(): void {
    this.setEstrellas(this.valoracion);
  }

  setEstrellas(valoracion: number): void{
    if(valoracion >= 0 && valoracion <= 5){
      for (let i = 1; i < valoracion; i++) {
        this.estrellas.push("fa-solid fa-star");
      }
      if(valoracion%1 > 0.21 && valoracion%1 < 0.79){
        this.estrellas.push("fa-solid fa-star-half-stroke");
      }else if(valoracion%1 > 0.79){
        this.estrellas.push("fa-solid fa-star");
      }
      for (let i = this.estrellas.length; i < 5; i++){
        this.estrellas.push("fa-regular fa-star");
      }
    }
  }

}
