import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectionComponent }   from './selection/selection.component';

const routes: Routes = [
  { path: 'selection', component: SelectionComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}