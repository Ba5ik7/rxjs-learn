import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperatorsRoutingModule } from './operators-routing.module';
import { OperatorsComponent } from './operators.component';

@NgModule({
  declarations: [
    OperatorsComponent
  ],
  imports: [
    CommonModule,
    OperatorsRoutingModule
  ]
})
export class OperatorsModule { }
