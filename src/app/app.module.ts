import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StocklistComponent } from './stocklist/stocklist.component';
import { StockbodyComponent } from './stockbody/stockbody.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StocklistComponent,
    StockbodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
