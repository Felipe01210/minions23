import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Minion } from '../interfaces/minions.interface';
import { MinionsService } from '../services/minions.service';

@Component({
  selector: 'app-delete-minion',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './delete-minion.component.html'
})
export class DeleteMinionComponent implements OnInit{

  @Input() id : number = 0;
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

  ngOnInit(): void {
    this.minionService.getMinionById(this.id)
    .subscribe({
      next: (minion) => {
        this.minion = minion;
      }
    })
  }

  deleteMinion(){
    this.minionService.deleteMinion(this.id)
    .subscribe({
      next: (res) => {this.error = false; window.location.href="../minions"},
      error: (error) => {
        this.error = true;
        this.errorText = error.status + ' ' + error.statusText;
      }
    })
  }

}
