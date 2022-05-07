import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperatorsRoutingModule } from './operators-routing.module';
import { OperatorsComponent } from './operators.component';
import { CombineallComponent } from './combineall/combineall.component';


@NgModule({
  declarations: [
    OperatorsComponent,
    CombineallComponent
  ],
  imports: [
    CommonModule,
    OperatorsRoutingModule
  ]
})
export class OperatorsModule { }
