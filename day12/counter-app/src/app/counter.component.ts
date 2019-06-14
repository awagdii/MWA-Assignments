import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<button (click)="subtract()">-</button> {{counterValue}} <button (click)="add()">+</button>
  `
})
export class CounterComponent {
  @Input() counterValue;
  @Output() counterChange = new EventEmitter();

  add() {
    this.counterValue++;
    this.counterChange.emit(this.counterValue);
  }
  subtract() {
    this.counterValue--;
    this.counterChange.emit(this.counterValue);

  }
}
