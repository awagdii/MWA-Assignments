import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-counter counterValue={{defaultCounterValue}} (counterChange)=counter1Change($event)></app-counter><br>
    Component 1 Counter Value = {{componentCounterValue1}}

    <br><br>
    <app-counter counterValue={{defaultCounterValue}} (counterChange)=counter2Change($event)></app-counter><br>
    Component 2 Counter Value = {{componentCounterValue2}}

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'counter-app';
  public defaultCounterValue = 0;
  public componentCounterValue1;
  public componentCounterValue2;
  counter1Change(data) {
    this.componentCounterValue1 = data;
  }
  counter2Change(data) {
    this.componentCounterValue2 = data;
  }

}
