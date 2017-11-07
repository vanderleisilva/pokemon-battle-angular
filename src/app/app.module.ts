import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import { SelectionComponent } from './selection/selection.component';
import { BattleComponent } from './battle/battle.component';
import { EndComponent } from './end/end.component';


@NgModule({
  declarations: [
    AppComponent,
    SelectionComponent,
    BattleComponent,
    EndComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
