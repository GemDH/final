import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'gemfinal';

  result: number = 0;
  num1: number = 0;
  num2: number = 0;

  add() {
    this.result = this.num1 + this.num2;
  }

  sub() {
    this.result = this.num1 - this.num2;
  }

  mul() {
    this.result = this.num1 * this.num2;
  }

  div() {
    this.result = this.num1 / this.num2;
  }
}
