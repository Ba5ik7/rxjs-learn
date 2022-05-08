import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConditionalComponent } from './conditional.component';
import { DefaultifemptyComponent } from './routes/defaultifempty/defaultifempty.component';

const routes: Routes = [{
   path: '', component: ConditionalComponent },
   {
    path: '', 
    component: ConditionalComponent,
    children: [
      {
          path: 'defaultifempty',
          component: DefaultifemptyComponent
      }
    ]
  },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConditionalRoutingModule { }
