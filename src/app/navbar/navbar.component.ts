import { Component, Output, NgModule, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: 'navbar.component.html' 
})
export class NavbarComponent {

  query: string = '';

  @Output() emittQuery: EventEmitter<string> = new EventEmitter<string>()

  constructor(private router: Router){}

  sendQuery(){
    this.emittQuery.emit(this.query);
  }

  search(){
    this.router.navigate([`minions/${this.query}`])
  }

}
