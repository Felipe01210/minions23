import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Minion } from '../interfaces/minions.interface';
import { MinionsService } from '../services/minions.service';

@Component({
  selector: 'app-add-minion',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './add-minion.component.html'
})
export class AddMinionComponent {

  error: Boolean = false;
  errorText: String = '';

  minion: Minion = {
    id:    0,
    name:  "",
    bio:   "",
    img:   "assets/img/default.jpg",
    birth: "",
    side:  ""
  }

  constructor(private minionService: MinionsService){}

  sendMinion(){
    this.minionService.addMinion(this.minion)
    .subscribe({
      next: (minion) => {this.error = false; window.location.href="../minions"},
      error: (error) => {
        this.error = true;
        this.errorText = error.status + ' ' + error.statusText;
      }
    })
  }

}
