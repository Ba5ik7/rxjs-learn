import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConditionalRoutingModule } from './conditional-routing.module';
import { ConditionalComponent } from './conditional.component';
import { DefaultifemptyComponent } from './routes/defaultifempty/defaultifempty.component';


@NgModule({
  declarations: [
    ConditionalComponent,
    DefaultifemptyComponent
  ],
  imports: [
    CommonModule,
    ConditionalRoutingModule
  ]
})
export class ConditionalModule { }
