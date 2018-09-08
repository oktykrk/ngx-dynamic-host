import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, QweComponent } from './app.component';
import { DynamicHostModule } from '../lib/dynamic-host/dynamic-host.module';

@NgModule({
  declarations: [
    AppComponent,
    QweComponent
  ],
  imports: [
    BrowserModule,
    DynamicHostModule
  ],
  entryComponents: [
    QweComponent
  ],
  exports: [
    // QweComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
