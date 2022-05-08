import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CombinationRoutingModule } from './combination-routing.module';
import { CombinationComponent } from './combination.component';

// Routes
import { CombineallComponent } from './routes/combineall/combineall.component';


@NgModule({
  declarations: [
    CombinationComponent,
    CombineallComponent
  ],
  imports: [
    CommonModule,
    CombinationRoutingModule
  ]
})
export class CombinationModule { }
