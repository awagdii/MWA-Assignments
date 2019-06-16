import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DumbComponent } from './dumb/dumb.component';
import { SmartComponent } from './smart/smart.component';
import { IsVisableDirective } from './is-visable.directive';
import { Multi3Pipe } from './muti3.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SmartComponent,
    DumbComponent,
    IsVisableDirective,
    Multi3Pipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
