import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import { SelectionComponent } from './selection/selection.component';
import { BattleComponent } from './battle/battle.component';
import { EndComponent } from './end/end.component';
import { HeaderComponent } from './header/header.component';
import { ActionsComponent } from './battle/actions/actions.component';


@NgModule({
  declarations: [
    AppComponent,
    SelectionComponent,
    BattleComponent,
    EndComponent,
    HeaderComponent,
    ActionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
