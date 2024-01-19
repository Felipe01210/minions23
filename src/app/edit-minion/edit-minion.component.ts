import { Component, OnInit, Input } from '@angular/core';
import { MinionsService } from '../services/minions.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Minion } from '../interfaces/minions.interface';

@Component({
  selector: 'app-edit-minion',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './edit-minion.component.html'
})
export class EditMinionComponent implements OnInit{

  constructor(private minionService: MinionsService){}

  @Input() id: number = 0;
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

  ngOnInit(): void {
    this.minionService.getMinionById(this.id)
    .subscribe({
      next: (minion) => {
        this.minion = minion;
      }
    })
  }

  sendMinion(){
    this.minionService.editMinion(this.minion)
    .subscribe({
      next: (minion) => {this.error = false; window.location.href="../minions"},
      error: (error) => {
        this.error = true;
        this.errorText = error.status + ' ' + error.statusText;
      }
    })
  }

}
