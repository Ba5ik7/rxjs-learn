import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperatorsComponent } from './operators.component';

const routes: Routes = [
  {
    path: '', 
    component: OperatorsComponent,
    children: [
      {
          path: 'combination',
          loadChildren: () => import('./combination/combination.module').then(m => m.CombinationModule)
      },
      {
        path: 'conditional',
        loadChildren: () => import('./conditional/conditional.module').then(m => m.ConditionalModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperatorsRoutingModule { }
