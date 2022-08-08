import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculationPageRoutingModule } from './calculation-page-routing.module';
import { CalculationPageComponent } from './calculation-page.component';
import { CalculatorComponent } from './components/calculator/calculator.component';

@NgModule({
  declarations: [CalculationPageComponent, CalculatorComponent],
  imports: [CommonModule, CalculationPageRoutingModule],
})
export class CalculationPageModule {}
