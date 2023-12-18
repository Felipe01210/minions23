import { Component, Output, NgModule, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: 'navbar.component.html' 
})
export class NavbarComponent {

  query: string = '';

  @Output() emittQuery: EventEmitter<string> = new EventEmitter<string>()

  sendQuery(){
    this.emittQuery.emit(this.query);
  }

}
