import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() buttonType: string | undefined;
  @Input() buttonColor: string | undefined;
  @Input() buttonHeight: string | undefined;
  @Input() buttonWidth: string | undefined;
  @Input() buttonTextColor: string | undefined;
  @Input() buttonWidthSM: string | undefined;
  @Input() buttonFill: string | undefined;
  @Input() buttonClass: string | undefined;
  @Input() buttonExpand: string | undefined;
  @Input() btnDisable: boolean = false;
  @Input() btnDisableColor: boolean = false;
  @Input() buttonId: string | undefined;
  @Input() link = '';
  @Output() btnClick = new EventEmitter<any>();

  value: any;
  appControl: FormControl<any> | any;
  @Input() appformGroup: FormGroup | any;
  @Input() appControlName: any;

  ngOnInit(): void {}

  change(e: any) {
    this.onTouched();

    this.value = e.target.value;

    this.appControl = this.appformGroup.controls[
      this.appControlName
    ] as FormControl;

    this.onChanged(e.target.value);
  }
  onTouched() {
    throw new Error('Method not implemented.');
  }
  onChanged(value: any) {
    throw new Error('Method not implemented.');
  }

  buttonClicked() {
    this.btnClick.emit();
  }
}
