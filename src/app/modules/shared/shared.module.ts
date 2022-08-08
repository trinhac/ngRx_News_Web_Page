import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from 'src/app/pages/calculation-page/components/calculator/calculator.component';
import { NbCardModule, NbIconModule, NbLayoutModule, NbTabsetModule, NbActionsModule, NbButtonModule } from '@nebular/theme';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbIconModule,
    NbCardModule,
    NbTabsetModule,
    NbActionsModule,
    HttpClientModule,
  ],
  exports: [
    NbLayoutModule,
    NbIconModule,
    NbCardModule,
    NbTabsetModule,
    NbActionsModule,
    HttpClientModule,
    NbButtonModule,
  ]
})
export class SharedModule { }
