import { Component, signal } from '@angular/core';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  // private calculator = inject(ExemploServiceService);
  // total = this.calculator.add()

  protected firstName = signal('Rafael');

  protected isAdmin = signal(false);

  protected items = signal([
    {
      id: 1,
      name: "item 1",
      quantity: 2
    },

    {
      id: 2,
      name: "item 2",
      quantity: 3
    },

    {
      id: 3,
      name: "item 3",
      quantity: 1
    }
  ])


  mudarNome() {
    this.firstName.update(() => "Maria");
  }

  changeIsAdmin() {
    this.isAdmin.update(() => !this.isAdmin());
  }
}
