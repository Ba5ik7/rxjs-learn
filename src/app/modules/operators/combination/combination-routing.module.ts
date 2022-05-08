import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombinationComponent } from './combination.component';
import { CombineallComponent } from './routes/combineall/combineall.component';

const routes: Routes = [
  {
    path: '', 
    component: CombinationComponent,
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
export class CombinationRoutingModule { }
