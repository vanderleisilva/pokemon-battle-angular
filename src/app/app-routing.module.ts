import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectionComponent }   from './selection/selection.component';
import { BattleComponent }   from './battle/battle.component';
import { EndComponent }   from './end/end.component';

const routes: Routes = [
  { path: 'selection', component: SelectionComponent },
  { path: 'battle/:pokemon', component: BattleComponent },
  { path: 'end', component: EndComponent },
  { path: '**',   redirectTo: 'selection' },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}