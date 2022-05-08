import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'operators', loadChildren: () => import('./modules/operators/operators.module').then(m => m.OperatorsModule) },
  { path: 'subjects', loadChildren: () => import('./modules/subjects/subjects.module').then(m => m.SubjectsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
