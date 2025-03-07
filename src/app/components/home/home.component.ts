import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  protected firstName = signal('Rafael');


  mudarNome() {
    this.firstName.update(() => "Maria")
  }
}
