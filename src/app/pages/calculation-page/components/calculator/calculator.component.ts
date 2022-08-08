import { Component, OnInit } from '@angular/core';
import { CalculationService } from 'src/app/services/calculation.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {
  inputData: string = '';
  constructor(private calcService: CalculationService) {}

  ngOnInit(): void {
    this.calcService.listenCurrentValue((value) => {
      this.inputData = value.toString();
    });
  }
  onClick(input: string) {
    let temp = parseFloat(input);
    if (isNaN(temp)) {
      this.calcService.currentOperator = input;
      console.log(input);
      this.calcService.previousValue = this.calcService.currentValue;
      this.calcService.setCurrentValue(0);
    } else {
      console.log(this.calcService.currentValue, temp);
      this.calcService.setCurrentValue(
        parseFloat(`${this.calcService.currentValue}${temp}`)
      );
    }
  }
  reset() {
    this.calcService.reset();
  }
  calculate() {
    let result = this.calcService.calculate(
      this.calcService.previousValue,
      this.calcService.currentValue,
      this.calcService.currentOperator
    );
    this.calcService.reset();
    this.calcService.setCurrentValue(result);
  }
}
