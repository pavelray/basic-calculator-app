import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'basic-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
input: any;
previousInput: any;
result: any;
operation: any;

  constructor() { }

  ngOnInit() {
    this.input = '0';
  }

  clear() {
    this.input = '0';
    this.previousInput = undefined;
    this.result = undefined;
    this.operation = undefined;
  }

  sign()  {
      this.input = this.input.charAt(0) === '-' ? this.input.slice(1) : '-' + this.input;
  }

  append(event) {
    if (event.target.textContent !== '.') {
      this.input = this.input + event.target.textContent;
      if (this.input.indexOf(0) === 0 && !this.input.includes('.')) {
        this.input  = this.input.slice(1);
      }
    } else {
      if (!this.input.includes('.')) {
        this.input = this.input + event.target.textContent;
      } else {
        this.input = event.target.textContent;
      }
    }
  }

  calculate(event) {
    this.operation = event.target.textContent;
    if (this.previousInput === undefined) {
      this.previousInput = this.input;
    }
    this.input = '0';
  }

  equals() {
    if (this.operation !== undefined && this.previousInput !== undefined) {
     switch (this.operation) {
       case '*': {
         this.result = +this.previousInput * +this.input;
         this.input = String(this.result);
         this.previousInput = this.input;
         break;
       }
       case '+': {
        this.result = +this.previousInput + +this.input;
        this.input = String(this.result);
        this.previousInput = this.input;
        break;
      }
      case '-': {
        this.result = +this.previousInput - +this.input;
        this.input = String(this.result);
        this.previousInput = this.input;
        break;
      }
      case '/': {
        this.result = +this.previousInput / +this.input;
        this.input = String(this.result);
        this.previousInput = this.input;
        break;
      }
     }
    }
  }

  percent() {
    if (this.input !== undefined) {
      this.result = +this.input / 100;
      this.previousInput = this.result;
      this.input = String(this.result);
    }
  }
}
