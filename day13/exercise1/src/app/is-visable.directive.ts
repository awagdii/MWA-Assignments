import { Directive, Input, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appIsVisable]'
})
export class IsVisableDirective implements OnInit {


  @Input('appIsVisable') appIsVisable: boolean;
  @HostBinding('style.display') display;
  constructor() { }

  ngOnInit(): void {
    console.log(this.appIsVisable);
    this.display = this.appIsVisable ? 'block' : 'none';
  }

}
