import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExemploServiceService {

  constructor() { }

  add(num1: number, num2: number) {
    return num1 + num2;
  }
}
