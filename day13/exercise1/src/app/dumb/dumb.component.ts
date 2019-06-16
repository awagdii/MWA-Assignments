import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dumb',
  template: `
  <div>
    {{model.firstname|multi3}} {{model.lastname|multi3}}
  </div>
  `,
  styleUrls: ['./dumb.component.css']
})
export class DumbComponent implements OnInit {
  @Input() public model;
  constructor() { }

  ngOnInit() {
  }

}
