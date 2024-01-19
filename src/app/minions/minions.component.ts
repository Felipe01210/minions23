import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Minion } from '../interfaces/minions.interface';
import { NavbarComponent } from '../navbar/navbar.component';
import { MinionsService } from '../services/minions.service';
import { ActivatedRoute, Router, RouterLink, RouterOutlet, Params } from '@angular/router';
import { Observable, Subject, catchError, throwError, of, ignoreElements } from 'rxjs';

@Component({
  selector: 'app-minions',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, AsyncPipe, JsonPipe],
  templateUrl: './minions.component.html'
})
export class MinionsComponent implements OnInit{

  //Minions como lista simple
  // minions: Minion[] = []

  //Minions como lista observable
  minions$!: Observable<Minion[]>;
  error$!: Observable<any>;
  error: Boolean = false;
  errorText: String = '';

  //Input antes de rutas
  // @Input() minions: Minion[] = [];

  //Input tras rutas
  @Input() searchTerm: string = '';

  constructor(private minionService: MinionsService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    if(this.searchTerm){
      //Busqueda por nombre (coincidente en parte)
      // this.getMinionsByName();

      //Busqueda por nombre (coincidente al 100%)
      // this.minionService.getMinionByName(this.searchTerm)
      // .subscribe({
      //   next: (minions) => {
      //     this.minions = minions
      //   }
      // })

      //Busqueda por query (no solo filtra por nombre)
      this.route.params
      .subscribe({
        next: (params) => {
          this.searchTerm = params['searchTerm']
          this.minions$ = this.minionService.getMinionByQuery(this.searchTerm)
        }
      })
      // .subscribe({
      //   next: (minions) => {
      //     this.minions = minions
      //   }
      // })

    }else{
      // this.minionService.getMinions()
      // .subscribe({
      //   next: (minions) => this.minions = minions
      // });

      //Una posible solucion a gestion de errores (la que le mola al fundador)
      this.minions$ = this.minionService.getMinions()
      this.error$ = this.minions$.pipe(
        //ignoreElements() ignora el next, de forma que podemos quedarnos con el error
        ignoreElements(),
        catchError((err) => of(err))
      )

      //Una posible solucion a gestion de errores
      // .pipe(catchError(e => {
      //   this.error = true;
      //   this.errorText = e.status + ' ' + e.statusText;
      //   return of();
      //   // return throwError(() => {this.error = true; this.errorText=e.message})
      // }))
    }
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   if(this.searchTerm){
  //     //Busqueda por nombre (coincidente en parte)
  //     // this.getMinionsByName();

  //     //Busqueda por nombre (coincidente al 100%)
  //     // this.minionService.getMinionByName(this.searchTerm)
  //     // .subscribe({
  //     //   next: (minions) => {
  //     //     this.minions = minions
  //     //   }
  //     // })

  //     //Busqueda por query (no solo filtra por nombre)
  //     this.minions$ = this.minionService.getMinionByQuery(this.searchTerm)
  //     // .subscribe({
  //     //   next: (minions) => {
  //     //     this.minions = minions
  //     //   }
  //     // })
  //   }else{
  //     // this.minionService.getMinions()
  //     // .subscribe({
  //     //   next: (minions) => this.minions = minions
  //     // });

  //     this.minions$ = this.minionService.getMinions();
  //   }
  // }

getMinionsByName(){
  // this.minionService.getMinions()
  // .subscribe({
  //   next: (minions) => {
  //     this.minions = minions.filter(minion => minion.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
  //   }
  // })
}

//favoritos
favoritos: Minion[] = [];

//funciones
addFav(minion: Minion){
  this.favoritos.push(minion);
}

quitFav(minion: Minion){
  this.favoritos.splice(this.favoritos.indexOf(minion));
}

goToInfo(id: number){
  this.router.navigate(["minions/info/"+id]);
}

}
