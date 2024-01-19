import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MinionsService } from '../services/minions.service';
import { Minion } from '../interfaces/minions.interface';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-minion-info',
  standalone: true,
  imports: [RouterLink, AsyncPipe],
  templateUrl: './minion-info.component.html'
})
export class MinionInfoComponent implements OnInit{

  //Input con un nombre distinto al de la ruta
  //@Input('id') identifier : number = 0

  //Input con nomber coincidente con el de la ruta
  @Input() id: number = 0;
  // minion: Minion = {
  //   id:    0,
  //   name:  "",
  //   bio:   "",
  //   img:   "",
  //   birth: "",
  //   side:  ""
  // }

  minion$!: Observable<Minion>

  constructor(private minionService: MinionsService, private route: ActivatedRoute){}

  ngOnInit(): void {
    console.log(this.id)
    //Cambios dinamicos en la pagina sin usar ngOnChange
    this.route.params
    .subscribe({
      next: (data) => {this.id = data['id']; this.minion$ = this.minionService.getMinionById(this.id)}
    })
    this.minion$ = this.minionService.getMinionById(this.id)
    // .subscribe({
    //   next: (minion) => {
    //     this.minion = minion
    //   }
    // })
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   this.minion$ = this.minionService.getMinionById(this.id)
  //   // .subscribe({
  //   //   next: (minion) => {
  //   //     this.minion = minion
  //   //   }
  //   // })
  // }


}
