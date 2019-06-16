import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-smart></app-smart>
  <div [appIsVisable]="true">appIsVisable is true </div>
  <div [appIsVisable]="false">appIsVisable is false </div>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercise1';
}
