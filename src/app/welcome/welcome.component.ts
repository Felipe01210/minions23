import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {

}
