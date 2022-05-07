import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombineallComponent } from './combineall/combineall.component';
import { OperatorsComponent } from './operators.component';

const routes: Routes = [
  {
    path: '', 
    component: OperatorsComponent,
    children: [
      {
          path: 'combineall',
          component: CombineallComponent
      }
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperatorsRoutingModule { }
