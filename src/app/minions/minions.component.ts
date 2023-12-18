import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Minion } from '../interfaces/minions.interface';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-minions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './minions.component.html'
})
export class MinionsComponent {

  @Input() minions: Minion[] = [];

//favoritos
favoritos: Minion[] = [];

//funciones
addFav(minion: Minion){
  this.favoritos.push(minion);
}



quitFav(minion: Minion){
  this.favoritos.splice(this.favoritos.indexOf(minion));
}

}
