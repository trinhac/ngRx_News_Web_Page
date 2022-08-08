import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NthhereRoutingModule } from './nthhere-routing.module';
import { NthhereComponent } from './nthhere.component';


@NgModule({
  declarations: [
    NthhereComponent
  ],
  imports: [
    CommonModule,
    NthhereRoutingModule
  ]
})
export class NthhereModule { }
