import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  UntypedFormGroup,
  UntypedFormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-for-merchants',
  templateUrl: './for-merchants.component.html',
  styleUrls: ['./for-merchants.component.scss'],
})
export class ForMerchantsComponent implements OnInit {
  minAmount = 40000;
  eligible = false;
  isSmallScreen = false;

  placeholder: string =
    'Ex: 1000000                                                      SAR';
  constructor(private breakpointObserver: BreakpointObserver) {}
  public calcAmountForm: FormGroup | any;
  ngOnInit(): void {
    this.initForm();
    this.breakpointObserver
      .observe([Breakpoints.XSmall])
      .subscribe((result) => {
        this.isSmallScreen = result.matches;
      });
  }

  initForm() {
    let calculate = '';

    this.calcAmountForm = new UntypedFormGroup({
      calculate: new UntypedFormControl(calculate, [
        Validators.required,
        Validators.min(40000),
        // Validators.max(1000000),
      ]),
    });
  }

  get formControl() {
    return this.calcAmountForm.controls;
  }
  public checkError = (controlName: string, errorName: string) => {
    return this.formControl[controlName].hasError(errorName);
  };
  onCalculate() {
    // debugger;
    if (this.calcAmountForm.value.calculate > this.minAmount) {
      return (this.eligible = !this.eligible);
    } else return false;
  }
}
