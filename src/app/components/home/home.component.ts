import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  protected firstName = signal('Rafael');

  protected isAdmin = signal(false);


  mudarNome() {
    this.firstName.update(() => "Maria");
  }

  changeIsAdmin() {
    this.isAdmin.update(() => !this.isAdmin());
  }
}
