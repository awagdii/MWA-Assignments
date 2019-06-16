import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart',
  template: `
  <p *ngFor="let user of users">
    <app-dumb [model]="user"></app-dumb>
  </p>
  `,
  styleUrls: ['./smart.component.css']
})
export class SmartComponent implements OnInit {
  public users = [{ firstname: 'Ahmed', lastname: 'wagdi' }, { firstname: 'Assad', lastname: 'Saad' }]
  constructor() { }

  ngOnInit() {
  }

}
